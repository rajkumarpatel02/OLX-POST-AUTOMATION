export interface OLXCategory {
  id: string;
  label: string;
  subcategories?: string[];
}

export interface OLXCity {
  id: string;
  name: string;
  state: string;
}

export interface OLXPreparedData {
  title: string;
  description: string;
  price: string;
  category: string;
  location: string;
  contact: string;
  formattedText: string;
}
