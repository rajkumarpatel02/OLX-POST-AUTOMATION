import { ListingFormData, FormErrors } from '../types/form';
import { FIELD_LIMITS } from './constants';

export const validateForm = (data: ListingFormData): FormErrors => {
    const errors: FormErrors = {};

    if (!data.title.trim()) {
        errors.title = 'Title is required';
    } else if (data.title.length > FIELD_LIMITS.TITLE_MAX_LENGTH) {
        errors.title = `Title must be less than ${FIELD_LIMITS.TITLE_MAX_LENGTH} characters`;
    }

    if (!data.description.trim()) {
        errors.description = 'Description is required';
    } else if (data.description.length < FIELD_LIMITS.DESCRIPTION_MIN_LENGTH) {
        errors.description = `Description must be at least ${FIELD_LIMITS.DESCRIPTION_MIN_LENGTH} characters`;
    }

    if (!data.price) {
        errors.price = 'Price is required';
    } else if (isNaN(Number(data.price))) {
        errors.price = 'Price must be a valid number';
    }

    if (!data.category) errors.category = 'Category is required';
    if (!data.city) errors.city = 'City is required';
    if (!data.condition) errors.condition = 'Condition is required';
    if (!data.contactName.trim()) errors.contactName = 'Contact name is required';

    if (!data.contactPhone.trim()) {
        errors.contactPhone = 'Contact phone is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(data.contactPhone)) {
        errors.contactPhone = 'Invalid phone number format';
    }

    return errors;
};
