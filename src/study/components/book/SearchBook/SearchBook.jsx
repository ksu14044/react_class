import React, { useState } from 'react';

function SearchBook({bookList}) {

    const [searchBookInput, setSearchBookInput] = useState({
        book_name: "",
    });

    const handleSearchBookOnChange = (e) => {
        setSearchBookInput({
            ...searchBookInput,
            [e.target.name] : e.target.value,
        })
    }

    const handleSerachBookOnClick = () => { 
        const findBook = bookList.find(a => a.book_name === searchBookInput.book_name)
        
        if(!findBook) {
            alert ("도서명을 다시 입력하세요.");
            return;
        }
        else { alert(`${findBook.book_name}을 찾았습니다.`) } 
        console.log(bookList);
    }

    return (
        <div>
            <h1>도서정보 조회</h1>
            <input type="text" name="book_name" onChange={handleSearchBookOnChange} placeholder="도서명" value={searchBookInput.book_name} />
            <button onClick={handleSerachBookOnClick}>조회</button>
        </div>
    );
}

export default SearchBook;