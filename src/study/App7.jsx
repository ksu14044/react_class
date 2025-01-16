/***
 * 도서 정보 등록 및 조회
 * 
 * 도서명, isbn, 저자명, 출판사명, 카테고리
 * 
 * bookList에 저장
 * 
 * table
 * tbody
 * tr
 * td
 * 
 */
import React, { useState } from 'react';
import RegisterBook from './components/book/RegisterBook/RegisterBook';
import SearchBook from './components/book/SearchBook/SearchBook';
import "./styles/app7.css";

function App7(props) {

    const [ path, setPath ] = useState("register");

    const [ bookList, setBookList ] = useState([]);

    function handleRegisterOnClick() {
        setPath("register");
    }

    function handleSearchOnClick() {
        setPath("search");
    }

    return (
        <div>
            <button onClick={handleRegisterOnClick}>도서 등록</button>
            <button onClick={handleSearchOnClick}>도서 조회</button>
            {
                path === "register" && <RegisterBook bookList={bookList} setBookList={setBookList}/>
            }
            {
                path === "search" && <SearchBook bookList={bookList} />
            }
        </div>
    );
}

export default App7;