

export default function ListBlock({ items }) {
    return (
        <ul className="ListBlock">
            {items.map((item, index) => (
                <li key={index} className="ListItem">
                    {item}
                </li>
            ))}
        </ul>
    );
}