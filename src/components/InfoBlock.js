import './InfoBlock.css';

export default function InfoBlock({ title, subtitle }) {
    return (
        <div className="InfoBlock">
            <h2 className="InfoTitle">{title}</h2>
            {subtitle && <p className="InfoSubtitle">{subtitle}</p>}
        </div>
    );
}