import "./Contact.css"
import MailImage from "./images/mail.png"
import GithubImage from "./images/github.png"

export default function Contact() {
    return (
        <div className="FlexContainer" id="ContactContainer">
            <div className="Title" id="ContactTitle">Contact</div>
            <a href="mailto: omarattaalla@yahoo.com" className="ContactItem"><img src={MailImage} className="ContactImage"></img></a>
            <a href="https://github.com/OmarAttaalla" target="_blank" className="ContactItem"><img src={GithubImage} className="ContactImage"></img></a>
        </div>
    )
}