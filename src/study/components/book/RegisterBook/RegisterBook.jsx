import React, { useState } from 'react';

function RegisterBook({bookList, setBookList}) {

    const [bookInput, setBookInput] = useState({
        book_name: "",
        isbn: "",
        author: "",
        publisher: "",
        category: "",
    })

    const handleBookInputOnChange = (e) =>{
        setBookInput({
            ...bookInput,
            [e.target.name] : e.target.value,
        })
    }

    const handleBookRegisterOnClick = () => {
        
        setBookList([
            ...bookList,
            bookInput,
        ]);

        alert("등록 완료");

        setBookInput({ 
            book_name: "",
            isbn: "",
            author: "",
            publisher: "",
            category: "",
        });
    } 

    return (
        <div>
            <h1>도서정보 등록</h1>
            <input type="text" onChange={handleBookInputOnChange} value={bookInput.book_name} name="book_name" placeholder="도서명" />
            <input type="text" onChange={handleBookInputOnChange} value={bookInput.isbn} name="isbn" placeholder="isbn" />
            <input type="text" onChange={handleBookInputOnChange} value={bookInput.author} name="author" placeholder="저자명" />
            <input type="text" onChange={handleBookInputOnChange} value={bookInput.publisher} name="publisher" placeholder="출판사" />
            <input type="text" onChange={handleBookInputOnChange} value={bookInput.category} name="category" placeholder="카테고리" />
            <button onClick={handleBookRegisterOnClick}>등록</button>
        </div>
    );
}

export default RegisterBook;