import React, { useState } from 'react';
import RegisterBook2 from './components/book2/RegisterBook2/RegisterBook2';
import SearchBook2 from './components/book2/SearchBook2/SearchBook2';
import "./styles/app8.css"
function App8(props) {
    const [ bookList, setBookList ] = useState([]);

    return (
        <div className="app8-container">
            <RegisterBook2 bookList={bookList} setBookList={setBookList}/>
            <SearchBook2 bookList={bookList}/>
        </div>
    );
}

export default App8;