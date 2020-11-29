import React, {useState, useContext} from 'react'
import { BookContext } from '../context/BookContext'

const AddBook = () => {
    const {addBook} = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addBook(title, author)
        setTitle('')
        setAuthor('')
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} required onChange={(e) =>setTitle(e.target.value) } />
            <input type="text" placeholder="Author" value={author} required onChange={(e)=>setAuthor(e.target.value)} />
            <input type="submit" value="Add"/>

        </form>
     );
}
 
export default AddBook;