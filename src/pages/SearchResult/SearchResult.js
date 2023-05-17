import './SearchResult.css';
import fallback from '../../images/fallback.png';

import { Link } from 'react-router-dom';

export default function SearchResult({ searchResult }) {
    return (
        <ul>
        {searchResult?.map(result => {
            return (
            <Link to={`/books/${result.id}`} key={result.id}>
                <li className="result-container" key={result.id}>
                    <h2>{result.volumeInfo.title} - {result.volumeInfo.authors?.join(', ')}</h2>
                    {result.volumeInfo.imageLinks? (
                    <img src={result.volumeInfo.imageLinks?.thumbnail} alt="book-cover" />
                    ) : (
                    <img src={fallback} alt="book-cover" />
                    )
                    }
                </li>
            </Link>
            )
        })}
      </ul>
    )
}