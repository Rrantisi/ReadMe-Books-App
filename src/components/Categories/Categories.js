import { useState, useEffect } from 'react';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');
 
    const key = process.env.REACT_APP_API_KEY
    const URL = `https://www.googleapis.com/books/v1/volumes/?q=category:*&maxResults=40&key=${key}`;

    const fetchCategories = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();

            const categories = data.items.map(
                book => { return (
                    book.volumeInfo.categories
                )
                }
            ).flat();

            const categoriesSet = new Set(categories.filter(item => item !== undefined));

            setCategories(Array.from(categoriesSet));
        } catch (error) {
            setError('Something went wrong.. Try Again Later');
        }
        if(error) {
            return <ErrorPage error={error}/>
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    const loading = () => {
        return <h1>Loading ...</h1>
    }

    const loaded = () => {
        return (
            <>
                {error && <p>{error}</p>}
                <option value="">Select a Category</option>
                { categories.map(item => {
                    return (
                        <option value={item} key={item}>{item}</option>
                    )
                })}
            </>
        )
    }
    return <>{categories ? loaded() : loading()}</>
}