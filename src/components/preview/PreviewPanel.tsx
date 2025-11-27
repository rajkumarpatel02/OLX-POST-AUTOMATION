import React from 'react';
import CopyButton from './CopyButton';
import { ListingFormData } from '../../types/form';
import { formatOLXText } from '../../utils/formatters';
import './PreviewPanel.css';

interface PreviewPanelProps {
    data: ListingFormData;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ data }) => {
    const formattedText = formatOLXText(data);

    return (
        <div className="preview-panel">
            <div className="preview-header">
                <h2>Preview</h2>
                <CopyButton text={formattedText} />
            </div>
            <div className="preview-content">
                <pre>{formattedText}</pre>
            </div>
            <div className="preview-instructions">
                <p>💡 <strong>Tip:</strong> Click "Copy to Clipboard" and paste this directly into the OLX description field.</p>
            </div>
        </div>
    );
};

export default PreviewPanel;
