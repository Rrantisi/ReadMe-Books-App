import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Nav from '../../components/Nav/Nav';
import Main from '../../pages/Main/Main';
import Books from '../../pages/Books/Books';
import Book from '../../pages/Book/Book';
import SearchForm from '../../components/SearchForm/SearchForm';

export default function App() {
  const [books, setBooks] = useState([])
  return (
    <div className="App">
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/books" element={ <Books books={books} setBooks={setBooks}/> } />
          <Route path="/books/:id" element={ <Book /> } />
          <Route path="/search" element={ <SearchForm /> } />
        </Routes>
      </main>
    </div>
  );
}
