import React,{useContext} from 'react';
import { BookContext } from '../context/BookContext';
import BookDetail from './BookDetail'

const BookList = () => {
    const {books} = useContext(BookContext)
    return ( 
        <div className="book-list">
            <ul>
                {books.map(book => {
                    return (<BookDetail book={book}/>)
                })}
            </ul>
        </div>
     );
}
 
export default BookList
