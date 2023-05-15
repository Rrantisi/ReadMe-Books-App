import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
            &nbsp; | &nbsp;
			<Link to="/books">Books</Link>
            &nbsp; | &nbsp;
            <Link to="/search">Search</Link>
        </nav>
    );
};

export default Nav;
