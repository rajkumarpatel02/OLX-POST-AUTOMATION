import React from 'react';
import './FormField.css';

interface FormFieldProps {
    label: string;
    name: string;
    error?: string;
    required?: boolean;
    children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({ label, name, error, required, children }) => {
    return (
        <div className={`form-field ${error ? 'has-error' : ''}`}>
            <label htmlFor={name}>
                {label} {required && <span className="required">*</span>}
            </label>
            {children}
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};

export default FormField;
