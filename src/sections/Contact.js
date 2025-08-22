import "./Contact.css"
import MailImage from "../images/mail.png"
import GithubImage from "../images/github.png"
import { useDarkMode } from "../context/DarkModeContext";

export default function Contact() {
    const { darkMode } = useDarkMode();

    return (
        <div className="FlexContainer" id="ContactContainer">
            <div className="Title" id="ContactTitle">Contact</div>
            <a href="mailto: omarattaalla@yahoo.com" className="ContactItem"><img src={MailImage} className="ContactImage" alt=""></img></a>
            <a href="https://github.com/OmarAttaalla" target="_blank" className={`ContactItem ${darkMode ? "inverted" : ""}`} rel="noopener noreferrer"><img src={GithubImage} className="ContactImage" alt=""></img></a>
        </div>
    )
}