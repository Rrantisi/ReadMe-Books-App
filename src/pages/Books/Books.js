import './Books.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Books({books, setBooks}) {
    const key = 'AIzaSyDop10aXF-PebMOztMlg9Ku-iiM1D8JewQ';
    const categories = 'bestseller';
    const URL = `https://www.googleapis.com/books/v1/volumes?q=categories:${categories}&key=${key}`;

    const fetchBooks = async () => {
        try {
            const response = await fetch(URL);
            const bookData = await response.json();
            setBooks(bookData.items);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    const loading = () => {
        return <h1>Loading ...</h1>
    }

    const loaded = () => {
        return (
            <>
            <h1>Our Best Sellers: </h1>
            <div className="Books">
                { books.map(book => {
                    return (
                        <Link to={`/books/${book.id}`} key={book.id}>
                            <div className="book-container">
                                <img src={book.volumeInfo.imageLinks?.thumbnail} alt="book-cover" />
                                <h2>{book.volumeInfo.title}</h2>
                            </div>
                        </Link>
                    )
                })}
            </div>
            </>
        )
    }

    return <section>{books ? loaded() : loading()}</section>
}