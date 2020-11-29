import React, {useContext} from 'react'
import { BookContext } from '../context/BookContext';

const Navbar = () => {
    const {books} = useContext(BookContext)
    return ( 
        <nav>
            <h1>Reading List Project</h1>
            <div>Currently you have {books.length } books to get through...</div>
        </nav>
     );
}
 
export default Navbar
