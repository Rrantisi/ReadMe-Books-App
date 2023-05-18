import './SearchForm.css'
import { useState } from 'react';
import SearchResult from '../../components/SearchResult/SearchResult';
import Categories from '../../components/Categories/Categories'

export default function SearchForm() {
    const [menuOption, setMenuOption] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const key = process.env.REACT_APP_API_KEY

    function handleSubmit(event) {
        event.preventDefault();
        handleSearch(searchInput)
    }

    async function handleSearch(input) {
        const URL = `https://www.googleapis.com/books/v1/volumes?q=${input}&key=${key}`;
        const response = await fetch(URL);
        const result = await response.json();
        setSearchResult(result.items);
        setSearchInput('');
    }

    function handleChange(event) {
        setSearchInput(event.target.value);
    }

    function handleOptionChange(event) {
        setMenuOption(event.target.value);
        handleSearch(event.target.value);
    }
    return (
        <div className="SearchForm">
        <form onSubmit={handleSubmit}>
            <label>
                Search Books:
            </label>
            <input type="text" value={searchInput} onChange={handleChange} />
            <div className="DropDownMenu">
                <select value={menuOption} onChange={handleOptionChange}>
                    <Categories />
                </select>
            </div>

            <button type="submit">Search</button>
        </form>
        < hr/>
        <div className="SearchResult">
            <SearchResult searchResult={searchResult} />
        </div>
        </div>
    )
}