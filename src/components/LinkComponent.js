import "./LinkComponent.css"

export default function LinkComponent({ link, title, description, subtitle }) {
    return (
        <>
            <div className="TitlesContainer">
                <h2 className="LinkTitle">
                    <a className="Link" href={link} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                {subtitle && <h3 className="LinkSubtitle">{subtitle}</h3>}
            </div>
            <ul className="SubInfo">
            {description.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </>
    );
}