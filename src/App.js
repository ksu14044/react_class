
import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage';
import WritePage from './pages/WritePage/WritePage';
import { Global } from '@emotion/react';
import { global } from './styles/global';
import MainLayout from './components/MainLayout/MainLayout';


function App(props) {
  return (
    <>
      <Global styles={global}/>

      <MainLayout>
        <Routes>
          <Route path="/" element={ <IndexPage />} />
          <Route path="/write" element={ <WritePage /> } />
        </Routes>
      </MainLayout>

    </>
  );
}

export default App;
