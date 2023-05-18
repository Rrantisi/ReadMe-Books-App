import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUser } from '../../utilities/users-service';
import './App.css';
import Nav from '../../components/Nav/Nav';
import Main from '../Main/Main';
import AuthPage from '../AuthPage/AuthPage';
import Books from '../Books/Books';
import Book from '../Book/Book';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../../components/Footer/Footer';
import ErrorPage from '../ErrorPage/ErrorPage';

export default function App() {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <Nav user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="/books" element={ <Books books={books} setBooks={setBooks}/> } />
            <Route path="/books/:id" element={ <Book /> } />
            <Route path="/search" element={ <SearchForm /> } />
            <Route path="*" element={ <ErrorPage /> } />
          </Routes>
        </>
      ) : (
        <AuthPage path="/" setUser={setUser} />
      )}
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
