import './SubjectLinks.css'
import html from '../../images/html.png';
import css from '../../images/css.png';
import sql from '../../images/sql.png';
import python from '../../images/python.png';
import javascript from '../../images/js.png';

export default function SubjectLinks({ setBooks }) {
    const key = process.env.REACT_APP_API_KEY

    const subjects = [
        {name: 'HTML', subject: 'html', src: html},
        {name: 'CSS', subject: 'css', src: css},
        {name: 'JavaScript', subject: 'javascript', src: javascript},
        {name: 'Python', subject: 'python', src: python},
        {name: 'SQL', subject: 'sql', src: sql}
    ];

    async function handleSubjectClick(subject) {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&maxResults=12&key=${key}`)
            const bookData = await response.json();
            setBooks(bookData.items)
        } catch (error) {

        }
    };

    return (
        <div className="SubjectLinks">
          {subjects.map((link, index) => (
            <span key={index} onClick={() => handleSubjectClick(link.subject)} >
              <img src={link.src} alt="thumbnail"></img>
            </span>
          ))}
        </div>
      );
    
}

