import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import logo from '../Nav/logo.png'

export default function Nav({ user, setUser }) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <>
        <nav className="nav">
            <div className="logo-container">
                <img src={logo} alt="Logo"/>
                <span>ReadMe</span>
            </div>
            <div className="nav-links">
                {/* <Link to="/">Home</Link>
                &nbsp; | &nbsp; */}
                <Link to="/books">Books</Link>
                &nbsp; | &nbsp;
                <Link to="/search">Search</Link>
                &nbsp; | &nbsp;
                {user && <span>&nbsp;&nbsp;Welcome, {user.name}</span>}
                &nbsp; | &nbsp;
                <Link to="" onClick={handleLogOut}>Log Out</Link>
            </div>
        </nav>
        </>
    );
};
