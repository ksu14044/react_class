
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage';
import WritePage from './pages/WritePage/WritePage';
import { Global } from '@emotion/react';
import { global } from './styles/global';
import MainLayout from './components/MainLayout/MainLayout';
import ListPage from './pages/ListPage/ListPage';
import SignupPage from './pages/SignupPage/SignupPage';
import SigninPage from './pages/SigninPage/SigninPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authUserIdAtomState } from './atoms/authAtom';


function App(props) {
  const [ userId, setUserId ] = useRecoilState(authUserIdAtomState);

  const location = useLocation();

  const authenticatedUser = async (accessToken) => {
    try {
      const response = await axios.get("http://localhost:8080/servlet_study_war/api/authenticated", {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
        }
      });
      setUserId(response.data.body);

    } catch (error) {
      console.error(error)
      setUserId(0);
    }
  };

  useEffect( () => {
    const accessToken = localStorage.getItem("AccessToken");
    if(!!accessToken) {
      authenticatedUser(accessToken);
    }
  }, [location.pathname])

  return (
    <>
      <Global styles={global}/>

      <MainLayout>
        <Routes>
          <Route path="/" element={ <IndexPage />} />
          <Route path="/write" element={ <WritePage /> } />
          <Route path="/list" element={<ListPage /> } />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </MainLayout>

    </>
  );
}

export default App;
