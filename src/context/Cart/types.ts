export type CartContextProviderProps = {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
};

export type CartDiscounts = {
    totalApplied: number;
    toApply: Array<string>;
    applied: Array<{message: string, discount: number}>;
};

export type CartContextType = {
    isOpen: boolean;
    subTotal: number;
    productsCount: number;
    products: Array<CartProduct>;
    cartDiscounts: CartDiscounts;
    open: (open: boolean) => void;
    remove: (product: any) => void;
    add: (product: any, quantity: number) => void;
};

export type CartProduct = {
    id: number;
    brand: string;
    image: string;
    price: number;
    total: number;
    quantity: number;
    description: string;
};

export type Discount = {
    _id?: string;
    brand: string;
    discount: number;
    threshold: number;
};