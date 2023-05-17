import './Book.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Book(props) {
    const { id } = useParams();
    const URL = `https://www.googleapis.com/books/v1/volumes/${id}`;

    const [book, setBook] = useState(null);

    const fetchBook = async () => {
        try {
            const response = await fetch(URL);
            const bookData = await response.json();
            setBook(bookData);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchBook();
    }, []);    

    const loading = () => {
        return <h1>Loading ...</h1>
    }

    const loaded = () => {
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
                    <div class="description">
                    <p dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }} className="description"></p>
                    </div>
                    <br/>
                    <a href={book.volumeInfo.previewLink} target={'_blank'} rel="noreferrer">Preview Book Here</a>
                </div>
            </div>
        )
    }

    return <section>{book ? loaded() : loading()}</section>
}