import './Main.css';
import logo from '../../components/Nav/logo.png';

export default function Main() {
    return (
        <div className="Main">
            <h1>ReadMe</h1>
            <img src={logo} alt="Logo"/>
            <p>ReadMe is an online ebook library that helps you search and access digital copies of books</p>
        </div>
    )
}