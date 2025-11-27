export interface ListingFormData {
    title: string;
    description: string;
    price: string;
    category: string;
    condition: 'New' | 'Used';
    brand: string;
    model: string;
    city: string;
    contactName: string;
    contactPhone: string;
    photos: File[];
}

export interface FormErrors {
    title?: string;
    description?: string;
    price?: string;
    category?: string;
    condition?: string;
    brand?: string;
    model?: string;
    city?: string;
    contactName?: string;
    contactPhone?: string;
    photos?: string;
}
