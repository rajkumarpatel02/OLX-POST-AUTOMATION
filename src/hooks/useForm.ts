import { useState, useEffect, useCallback } from 'react';
import { ListingFormData, FormErrors } from '../types/form';
import { validateForm } from '../utils/validators';
import { DEFAULT_FORM_VALUES } from '../utils/constants';
import { useLocalStorage } from './useLocalStorage';

export const useForm = () => {
    const [formData, setFormData] = useLocalStorage<ListingFormData>('olx_listing_data', DEFAULT_FORM_VALUES, (data) => ({
        ...data,
        photos: []
    }));
    const [errors, setErrors] = useState<FormErrors>({});
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);
        setIsValid(Object.keys(validationErrors).length === 0);
    }, [formData]);

    const handleChange = useCallback((field: keyof ListingFormData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    }, [setFormData]);

    const resetForm = useCallback(() => {
        setFormData(DEFAULT_FORM_VALUES);
    }, [setFormData]);

    return {
        formData,
        errors,
        isValid,
        handleChange,
        resetForm,
    };
};
