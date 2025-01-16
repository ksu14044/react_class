import React, { useState } from 'react';
import "./searchbook2.css"
import SearchItems from '../SearchItems/SearchItems';

function SearchBook2({bookList}) {
    const [ bookTableList, setBookTableList ] = useState([]);

    return (
        <div className='container'>
             <div>
                <h1>도서정보 조회</h1>
                <SearchItems bookList={bookList} setBookTableList={setBookTableList}/>
                <table className='book-table'>
                    <thead>
                        <tr>
                            <th>도서명</th>
                            <th>저자명</th>
                            <th>출판사</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookTableList.map(book => 
                                <tr>
                                    <td>{book.bookName}</td>
                                    <td>{book.author}</td>
                                    <td>{book.publisher}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchBook2;