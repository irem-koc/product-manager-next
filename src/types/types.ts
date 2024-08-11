export interface Product {
    id: number; // ID of the product
    title: string; // Title of the product
    description: string; // Description of the product
    category: string; // Category of the product
    price: number; // Price of the product
    discountPercentage: number; // Discount percentage on the product
    rating: number; // Rating of the product
    stock: number; // Stock quantity available
    tags: string[]; // Array of tags associated with the product
    brand: string; // Brand name of the product
    sku: string; // SKU (Stock Keeping Unit) of the product
    weight: number; // Weight of the product in an appropriate unit (e.g., grams)
    dimensions: {
        width: number; // Width of the product in an appropriate unit (e.g., cm)
        height: number; // Height of the product in an appropriate unit (e.g., cm)
        depth: number; // Depth of the product in an appropriate unit (e.g., cm)
    };
    warrantyInformation: string; // Warranty information of the product
    shippingInformation: string; // Shipping information of the product
    availabilityStatus: string; // Availability status (e.g., 'In Stock', 'Low Stock')
    reviews: {
        rating: number; // Rating given by the reviewer
        comment: string; // Comment provided by the reviewer
        date: string; // Date when the review was written
        reviewerName: string; // Name of the reviewer
        reviewerEmail: string; // Email of the reviewer
    }[];
    returnPolicy: string; // Return policy of the product
    minimumOrderQuantity: number; // Minimum quantity required to place an order
    meta: {
        createdAt: string; // Creation date of the product in ISO format
        updatedAt: string; // Last update date of the product in ISO format
        barcode: string; // Barcode of the product
        qrCode: string; // URL to the QR code of the product
    };
    images: string[]; // Array of image URLs associated with the product
    thumbnail: string; // Thumbnail image URL of the product
}
