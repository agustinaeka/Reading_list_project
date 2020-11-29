import React, {createContext, useState} from 'react';


export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBook] = useState([
        { title: 'Harry Potter and the Sorcerer’s Stone', author: 'J.K.Rowling', id: 1 },
        { title: ' The Hunger Games', author: 'Suzanne Collins ', id: 2 },
        {title:'Fangirl', author:' Rainbow Rowell', id:3}
    ])

    const addBook = (title, author) => {
        setBook([...books, { title: title, author: author, id: Math.random() }])
    }

    const removeBook = (id) => {
        setBook(books.filter(book => {
            return book.id !== id
        }))
    }

    return ( 
        <BookContext.Provider value={{books, removeBook, addBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;