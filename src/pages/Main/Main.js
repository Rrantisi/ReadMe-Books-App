import './Main.css';
import logo from '../../images/logo.png'

export default function Main() {
    return (
        <div className="Main">
            <h1>ReadMe</h1>
            <img className="intro-logo" src={logo} alt="Logo"/>
            <p className="intro">Welcome to ReadMe, your one-stop destination for a wide range of digital books.</p>
        </div>
    )
}