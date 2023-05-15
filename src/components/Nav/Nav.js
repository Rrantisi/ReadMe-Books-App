import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
			<Link to="/books">Books</Link>
            <Link to="/search">Search</Link>
        </nav>
    );
};

export default Nav;
