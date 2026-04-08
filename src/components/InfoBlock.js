import './InfoBlock.css';

export default function InfoBlock({ title, subtitle }) {
    return (
        <div className="InfoBlock">
            <h3 className="InfoTitle">{title}</h3>
            {subtitle && <p className="InfoSubtitle">{subtitle}</p>}
        </div>
    );
}