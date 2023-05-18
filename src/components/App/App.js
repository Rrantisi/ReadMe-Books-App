import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUser } from '../../utilities/users-service';
import './App.css';
import Nav from '../../components/Nav/Nav';
import Main from '../../pages/Main/Main';
import AuthPage from '../../pages/AuthPage/AuthPage';
import Books from '../../pages/Books/Books';
import Book from '../../pages/Book/Book';
import SearchForm from '../../components/SearchForm/SearchForm';
import Footer from '../../components/Footer/Footer';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

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
