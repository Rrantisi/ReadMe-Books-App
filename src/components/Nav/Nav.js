import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import logo from '../../../src/images/logo.png'

export default function Nav({ user, setUser }) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <>
        <nav className="nav">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="Logo"/>
                </Link>
                <span>ReadMe</span>
            </div>
            <div className="nav-links">
                <Link to="/books">Books</Link>
                &nbsp; | &nbsp;
                <Link to="/search">Search</Link>
                &nbsp; | &nbsp;
                {user && <span id="welcome-user">&nbsp;&nbsp;Welcome, {user.name}</span>}
                &nbsp; | &nbsp;
                <Link to="" onClick={handleLogOut}>Log Out</Link>
            </div>
        </nav>
        </>
    );
};
