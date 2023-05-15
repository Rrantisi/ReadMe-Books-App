import { Link } from "react-router-dom";

export default function Nav() {
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
