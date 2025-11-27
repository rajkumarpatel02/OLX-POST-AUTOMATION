import React from 'react';
import { Upload, X } from 'lucide-react';
import './ImageUpload.css';

interface ImageUploadProps {
    images: File[];
    onChange: (files: File[]) => void;
    maxImages?: number;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ images, onChange, maxImages = 12 }) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            const combinedFiles = [...images, ...newFiles].slice(0, maxImages);
            onChange(combinedFiles);
        }
    };

    const removeImage = (index: number) => {
        const newImages = images.filter((_, i) => i !== index);
        onChange(newImages);
    };

    return (
        <div className="image-upload-container">
            <div className="upload-area">
                <input
                    type="file"
                    id="photos"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    disabled={images.length >= maxImages}
                />
                <label htmlFor="photos" className="upload-label">
                    <Upload size={24} />
                    <span>Upload Photos ({images.length}/{maxImages})</span>
                </label>
            </div>

            {images.length > 0 && (
                <div className="image-preview-list">
                    {images.map((file, index) => (
                        <div key={index} className="image-preview-item">
                            <img src={URL.createObjectURL(file)} alt={`Preview ${index}`} />
                            <button type="button" onClick={() => removeImage(index)} className="remove-btn">
                                <X size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
