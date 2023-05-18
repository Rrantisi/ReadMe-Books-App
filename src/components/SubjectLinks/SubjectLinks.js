import './SubjectLinks.css'
import html from '../../images/html.png';
import css from '../../images/css.png';
import sql from '../../images/sql.png';
import python from '../../images/python.png';
import javascript from '../../images/js.png';
import java from '../../images/java.png';
import csharp from '../../images/csharp.png';
import cplus from '../../images/c++.png';
import swift from '../../images/swift.png';
import mongodb from '../../images/mongo_db.png';
import { useEffect, useState } from 'react';

export default function SubjectLinks({ setBooks }) {
  const [error, setError] = useState('');

  const key = process.env.REACT_APP_API_KEY

  const subjects = [
    {subject: 'html', src: html},
    {subject: 'css', src: css},
    {subject: 'javascript', src: javascript},
    {subject: 'python', src: python},
    {subject: 'sql', src: sql},
    {subject: 'java AND programming', src: java},
    {subject: 'c sharp', src: csharp},
    {subject: 'c++', src: cplus},
    {subject: 'swift programming', src: swift},
    {subject: 'mongodb', src: mongodb},
  ];
    
  async function fetchBooks(input) {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${input}&maxResults=10&key=${key}`)
      const bookData = await response.json();
      setBooks(bookData.items)
    } catch {
      setError('Something went wrong.. Try Again Later');
    }
  }

  function handleSubjectClick(subject) {
    fetchBooks(subject)
  };

  function renderDefaultSubject() {
    fetchBooks('javascript');
  }

  useEffect(() => {
    renderDefaultSubject()
  }, [])

  return (
    <div className="SubjectLinks">
      {error && <p>{error}</p>}
      {subjects.map((link, index) => (
        <span key={index} onClick={() => handleSubjectClick(link.subject)} >
          <img src={link.src} alt="thumbnail"></img>
        </span>
      ))}
    </div>
  ); 
}

