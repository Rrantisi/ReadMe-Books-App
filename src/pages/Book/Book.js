import './Book.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import striptags from 'striptags';

export default function Book(props) {
    const { id } = useParams();
    const URL = `https://www.googleapis.com/books/v1/volumes/${id}`;
    const previewLink = `https://books.google.com/books?id=${id}&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false`
    
    const [book, setBook] = useState(null);
    const [error, setError] = useState('');

    const fetchBook = async () => {
        try {
            const response = await fetch(URL);
            const bookData = await response.json();
            setBook(bookData);
        } catch (error) {
            setError('Something went wrong.. Try Again Later');
        }
    }

    useEffect(() => {
        fetchBook();
    }, []);    


    const loading = () => {
        return <h1>Loading ...</h1>
    }

    const loaded = () => {
        // this line of code is to remove HTML tags from book description
        const strippedDescription = striptags(book.volumeInfo.description);

        return (
            <div className="Book">
                <div className="book-wrapper">
                    <h2>{book.volumeInfo.title}</h2>
                    {book.volumeInfo.imageLinks? (
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt="book-cover" />
                    ) : (
                    <div className="image-fallback">{book.volumeInfo.title}</div>
                    )
                    }
                </div>
                <div className="book-details">
                    <p><span>Author:</span> {book.volumeInfo.authors?.join(', ')}</p>
                    {book.volumeInfo.categories? (
                        <p><span>Categories:</span> {book.volumeInfo.categories?.join(', ')}</p>
                    ) : (
                        <p><span>Categories:</span> N/A</p>
                    )
                    }
                    <p><span>Description:</span></p>
                    <div className="description">
                    <p className="description">{strippedDescription}</p>
                    </div>
                    <br/>
                    <a href={previewLink} target={'_blank'} rel="noreferrer">Preview Book Here</a>
                </div>
                <p className="error-message">&nbsp;{error}</p>
            </div>
        )
    }

    return <section>{book ? loaded() : loading()}</section>
}