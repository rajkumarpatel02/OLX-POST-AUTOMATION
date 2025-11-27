import React from 'react';
import FormField from './FormField';
import ImageUpload from './ImageUpload';
import { ListingFormData, FormErrors } from '../../types/form';
import { OLX_CATEGORIES, OLX_CITIES } from '../../data/olxData';
import './ListingForm.css';

interface ListingFormProps {
    data: ListingFormData;
    errors: FormErrors;
    onChange: (field: keyof ListingFormData, value: any) => void;
}

const ListingForm: React.FC<ListingFormProps> = ({ data, errors, onChange }) => {
    return (
        <div className="listing-form">
            <h2>Create Listing</h2>

            <FormField label="Title" name="title" error={errors.title} required>
                <input
                    type="text"
                    id="title"
                    value={data.title}
                    onChange={(e) => onChange('title', e.target.value)}
                    maxLength={60}
                    placeholder="e.g. iPhone 13 Pro Max - 256GB"
                />
            </FormField>

            <div className="form-row">
                <FormField label="Category" name="category" error={errors.category} required>
                    <select
                        id="category"
                        value={data.category}
                        onChange={(e) => onChange('category', e.target.value)}
                    >
                        <option value="">Select Category</option>
                        {OLX_CATEGORIES.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.label}</option>
                        ))}
                    </select>
                </FormField>

                <FormField label="Price (PKR)" name="price" error={errors.price} required>
                    <input
                        type="number"
                        id="price"
                        value={data.price}
                        onChange={(e) => onChange('price', e.target.value)}
                        placeholder="0"
                    />
                </FormField>
            </div>

            <div className="form-row">
                <FormField label="Condition" name="condition" error={errors.condition} required>
                    <select
                        id="condition"
                        value={data.condition}
                        onChange={(e) => onChange('condition', e.target.value)}
                    >
                        <option value="Used">Used</option>
                        <option value="New">New</option>
                    </select>
                </FormField>

                <FormField label="City" name="city" error={errors.city} required>
                    <select
                        id="city"
                        value={data.city}
                        onChange={(e) => onChange('city', e.target.value)}
                    >
                        <option value="">Select City</option>
                        {OLX_CITIES.map(city => (
                            <option key={city.id} value={city.id}>{city.name}</option>
                        ))}
                    </select>
                </FormField>
            </div>

            <div className="form-row">
                <FormField label="Brand" name="brand" error={errors.brand}>
                    <input
                        type="text"
                        id="brand"
                        value={data.brand}
                        onChange={(e) => onChange('brand', e.target.value)}
                    />
                </FormField>

                <FormField label="Model" name="model" error={errors.model}>
                    <input
                        type="text"
                        id="model"
                        value={data.model}
                        onChange={(e) => onChange('model', e.target.value)}
                    />
                </FormField>
            </div>

            <FormField label="Description" name="description" error={errors.description} required>
                <textarea
                    id="description"
                    value={data.description}
                    onChange={(e) => onChange('description', e.target.value)}
                    rows={6}
                    placeholder="Describe your item..."
                />
            </FormField>

            <div className="form-row">
                <FormField label="Contact Name" name="contactName" error={errors.contactName} required>
                    <input
                        type="text"
                        id="contactName"
                        value={data.contactName}
                        onChange={(e) => onChange('contactName', e.target.value)}
                    />
                </FormField>

                <FormField label="Phone Number" name="contactPhone" error={errors.contactPhone} required>
                    <input
                        type="tel"
                        id="contactPhone"
                        value={data.contactPhone}
                        onChange={(e) => onChange('contactPhone', e.target.value)}
                        placeholder="+92 300 1234567"
                    />
                </FormField>
            </div>

            <FormField label="Photos" name="photos" error={errors.photos}>
                <ImageUpload
                    images={data.photos}
                    onChange={(files) => onChange('photos', files)}
                />
            </FormField>
        </div>
    );
};

export default ListingForm;
