
export default function LinkComponent({ link, title, description }) {
    return (
        <>
            <h2 className="BoxTitle">
                <a className="Link" href={link} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </h2>
            <ul className="SubInfo">
            {description.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </>
    );
}