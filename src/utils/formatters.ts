import { ListingFormData } from '../types/form';
import { OLX_CATEGORIES, OLX_CITIES } from '../data/olxData';

export const formatCurrency = (value: string): string => {
    if (!value) return '';
    const number = parseFloat(value.replace(/[^0-9.]/g, ''));
    if (isNaN(number)) return value;
    return new Intl.NumberFormat('en-PK', {
        style: 'currency',
        currency: 'PKR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(number);
};

export const formatOLXText = (data: ListingFormData): string => {
    const categoryLabel = OLX_CATEGORIES.find(c => c.id === data.category)?.label || data.category;
    const cityLabel = OLX_CITIES.find(c => c.id === data.city)?.name || data.city;

    return `
📢 **${data.title}**

💰 **Price:** ${formatCurrency(data.price)}
📍 **Location:** ${cityLabel}

📝 **Description:**
${data.description}

---
🔹 **Details:**
• **Condition:** ${data.condition}
• **Brand:** ${data.brand}
• **Model:** ${data.model}
• **Category:** ${categoryLabel}

📞 **Contact:**
👤 ${data.contactName}
📱 ${data.contactPhone}
  `.trim();
};
