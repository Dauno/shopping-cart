
export type Product = {
    _id?: string;
    id: number;
    brand: string;
    image: string;
    price: number;
    description: string;
};

export type Discount = {
    _id?: string;
    brand: string;
    discount: number;
    threshold: number;
};