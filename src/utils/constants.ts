import { ListingFormData } from '../types/form';

export const FIELD_LIMITS = {
    TITLE_MAX_LENGTH: 60,
    DESCRIPTION_MAX_LENGTH: 4096,
    DESCRIPTION_MIN_LENGTH: 20,
    PHOTOS_MAX_COUNT: 12,
    PHOTOS_MAX_SIZE_MB: 5,
};

export const DEFAULT_FORM_VALUES: ListingFormData = {
    title: '',
    description: '',
    price: '',
    category: '',
    condition: 'Used',
    brand: '',
    model: '',
    city: '',
    contactName: '',
    contactPhone: '',
    photos: [],
};

export const APP_CONFIG = {
    APP_NAME: 'OLX Automator',
    VERSION: '1.0.0',
};
