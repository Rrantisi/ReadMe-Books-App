import { useState, useEffect } from 'react';

export default function Categories() {
    const [categories, setCategories] = useState([]);
 
    const key = process.env.REACT_APP_API_KEY
    const URL = `https://www.googleapis.com/books/v1/volumes/?q=category:*&maxResults=30&key=${key}`;

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
            <div className="Categories">
                { categories.map(item => {
                    return (
                        //   <Link to={`/books/${book.id}`} key={book.id}>
                        //       <div className="category-container"> 
                                <h2 key={item}>{item}</h2>
                        //           <img src={book.volumeInfo.imageLinks?.thumbnail} alt="book-cover" />
                        //      </div> 
                        //   </Link>
                    )
                })}
            </div>
            </>
        )
    }

    return <section>{categories ? loaded() : loading()}</section>
}