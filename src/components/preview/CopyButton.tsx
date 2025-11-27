import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { copyToClipboard } from '../../utils/clipboard';
import './CopyButton.css';

interface CopyButtonProps {
    text: string;
    label?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, label = 'Copy to Clipboard' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        const success = await copyToClipboard(text);
        if (success) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <button
            className={`copy-button ${copied ? 'copied' : ''}`}
            onClick={handleCopy}
            disabled={!text}
        >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            <span>{copied ? 'Copied!' : label}</span>
        </button>
    );
};

export default CopyButton;
