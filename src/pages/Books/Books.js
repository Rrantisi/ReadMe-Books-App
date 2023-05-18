import './Books.css';
import { Link } from 'react-router-dom';
import SubjectLinks from '../../components/SubjectLinks/SubjectLinks';

export default function Books({books, setBooks}) {
    return (
        <section>
        <SubjectLinks setBooks={setBooks} />
        <div className="Books">
            { books.map(book => {
                return (
                    <Link to={`/books/${book.id}`} key={book.id} >
                        <div className="book-container">
                        {book.volumeInfo.imageLinks? (
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt="book-cover" />
                        ) : (
                        <div className="image-fallback">{book.volumeInfo.title}</div>
                        )
                        }
                        </div>
                    </Link>
                )
            })}
        </div>
        </section>
    )
}