import { FileText, ExternalLink } from "lucide-react";
import "./PdfContainer.css"

export default function PdfContainer({ title, abstract, pdfUrl, previewImage }) {
    return (
        <div className="PaperCard">
            <div className="PaperInfo">
                <div className="PaperHeader">
                    <FileText className="PaperIcon" size={20} />
                    <a className="PaperTitle" href={pdfUrl} target="_blank" rel="noopener noreferrer">
                        {title}
                        <ExternalLink size={14} className="PaperLinkIcon" />
                    </a>
                </div>
                <p className="PaperAbstract">{abstract}</p>
            </div>

            {previewImage && (
                <div className="PaperPreviewWrapper" onClick={() => window.open(pdfUrl, "_blank")}>
                    <img
                        src={previewImage}
                        className="PaperPreview"
                        alt={`${title} preview`}
                    />
                    <div className="PaperPreviewOverlay">
                        <span>View PDF</span>
                    </div>
                </div>
            )}
        </div>
    );
}