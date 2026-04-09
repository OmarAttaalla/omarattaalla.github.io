import "./LinkComponent.css"

export default function LinkComponent({ link, title, description, subtitle }) {
    return (
        <div className="LinkComponentContainer">
            <div className="TitlesContainer">
                <h3 className="LinkTitle">
                    <a className="Link" href={link} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h3>
                {subtitle && <p className="LinkSubtitle">{subtitle}</p>}
            </div>
            <ul className="SubInfo">
                {description.map((item, index) => (
                    <li key={index} className="SubInfoItem">{item}</li>
                ))}
            </ul>
        </div>
    );
}