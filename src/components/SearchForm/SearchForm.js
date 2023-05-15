import './SearchForm.css'
import { useState } from 'react';
import SearchResult from '../../pages/SearchResult/SearchResult';

export default function SearchForm() {
    const [searchInput, setSearchInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    // const key = 'AIzaSyDop10aXF-PebMOztMlg9Ku-iiM1D8JewQ';
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`;

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch(URL);
        const result = await response.json();
        setSearchResult(result.items);
        setSearchInput('');
    }

    function handleChange(event) {
        setSearchInput(event.target.value);
    }

    return (
        <div className="SearchForm">
        <form onSubmit={handleSubmit}>
            <label>
                Search Books:
            </label>
            <input type="text" value={searchInput} onChange={handleChange} />
            <button type="submit">Search</button>
        </form>
        < hr/>
        <SearchResult searchResult={searchResult} />
        </div>
    )

}