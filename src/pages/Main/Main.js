import './Main.css';
import logo from '../../components/Nav/logo.png';

export default function Main() {
    return (
        <div className="Main">
            <h1>ReadMe</h1>
            <img className="intro-logo" src={logo} alt="Logo"/>
            <p className="intro">Welcome to ReadMe, your one-stop destination for a wide range of digital books.</p>
            {/* Browse through our user-friendly interface to explore books about major coding languages.</p> */}
            {/* <p className="intro">Interested in other subjects?<br/>
             Simply use the search bar to look up any book that you want.</p> */}
        </div>
    )
}