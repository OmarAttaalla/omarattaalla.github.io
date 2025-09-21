import React from "react";
import "./PdfContainer.css"

export default function PdfContainer({ title, abstract, pdfUrl, previewImage }) {
    return (
        <div className="pdf-container">
            <div className="pdf-header">
            <a className="pdf-title" href={pdfUrl} target="_blank" rel="noopener noreferrer">{title}</a>
            <p className="text-sm text-gray-700">{abstract}</p>
            </div>

            <img
                src={previewImage}
                className="pdf-viewer"
                alt="PDF Preview"
                onClick={() => window.open(pdfUrl, "_blank")}
            />
        </div>
    );
}