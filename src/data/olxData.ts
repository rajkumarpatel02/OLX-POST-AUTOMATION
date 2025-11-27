import { OLXCategory, OLXCity } from '../types/olx';

export const OLX_CATEGORIES: OLXCategory[] = [
    { id: 'mobiles', label: 'Mobile Phones' },
    { id: 'cars', label: 'Cars' },
    { id: 'bikes', label: 'Motorcycles' },
    { id: 'electronics', label: 'Electronics & Appliances' },
    { id: 'furniture', label: 'Furniture' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'books', label: 'Books, Sports & Hobbies' },
    { id: 'properties', label: 'Properties' },
    { id: 'services', label: 'Services' },
    { id: 'other', label: 'Other' },
];

export const OLX_CITIES: OLXCity[] = [
    { id: 'karachi', name: 'Karachi', state: 'Sindh' },
    { id: 'lahore', name: 'Lahore', state: 'Punjab' },
    { id: 'islamabad', name: 'Islamabad', state: 'Federal' },
    { id: 'rawalpindi', name: 'Rawalpindi', state: 'Punjab' },
    { id: 'faisalabad', name: 'Faisalabad', state: 'Punjab' },
    { id: 'multan', name: 'Multan', state: 'Punjab' },
    { id: 'peshawar', name: 'Peshawar', state: 'KPK' },
    { id: 'quetta', name: 'Quetta', state: 'Balochistan' },
    { id: 'sialkot', name: 'Sialkot', state: 'Punjab' },
    { id: 'gujranwala', name: 'Gujranwala', state: 'Punjab' },
];
