import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Book(props) {
    const { id } = useParams();
    const key = 'AIzaSyDop10aXF-PebMOztMlg9Ku-iiM1D8JewQ';
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
            <div>
                <h2>{book.volumeInfo.title}</h2>
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt="" />
                <p>Author: {book.volumeInfo.authors?.join(', ')}</p>
                <p>Categories: {book.volumeInfo.categories?.join(', ')}</p>
                <p dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}></p>
                <a href={book.volumeInfo.previewLink} target={'_blank'}>Check it out</a>
            </div>
        )
    }

    return <section>{book ? loaded() : loading()}</section>
}