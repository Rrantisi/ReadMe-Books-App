
import { Link } from 'react-router-dom';

export default function SearchResult({ searchResult }) {
    return (
        <ul>
        {searchResult?.map(result => {
            return (
            <Link to={`/books/${result.id}`} key={result.id}>
            <li key={result.id}>{result.volumeInfo.title}</li>
            </Link>
            )
        })}
      </ul>
    )
}