import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Nav from '../../components/Nav/Nav';
import Main from '../../pages/Main/Main';
import AuthPage from '../../pages/AuthPage/AuthPage';
import Books from '../../pages/Books/Books';
import Book from '../../pages/Book/Book';
import SearchForm from '../../components/SearchForm/SearchForm';
import Footer from '../../components/Footer/Footer';

export default function App() {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <>
          <Nav />
          <Routes>
            {/* <Route path="/" element={ <Main /> } /> */}
            <Route path="/books" element={ <Books books={books} setBooks={setBooks}/> } />
            <Route path="/books/:id" element={ <Book /> } />
            <Route path="/search" element={ <SearchForm /> } />
          </Routes>
        </>
      ) : (
        <AuthPage path="/" setUser={setUser}/>
      )}

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
