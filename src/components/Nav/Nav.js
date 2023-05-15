import { Link } from "react-router-dom";
import logo from '../Nav/logo.png'

export default function Nav() {
    return (
        <>
        <nav className="nav">
            <div className="logo-container">
                <img src={logo} alt="Logo"/>
                <span>ReadMe</span>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                &nbsp; | &nbsp;
                <Link to="/books">Books</Link>
                &nbsp; | &nbsp;
                <Link to="/search">Search</Link>
            </div>
        </nav>
        </>
    );
};
