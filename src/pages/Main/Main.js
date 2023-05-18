import './Main.css';
import logo from '../../images/logo.png'

export default function Main() {
    return (
        <div className="Main">
            <img className="intro-logo" src={logo} alt="Logo"/>
            <p className="intro"><span>Welcome to ReadMe</span><br /> Your Gateway to Comprehensive Coding Resources.</p>
        </div>
    )
}