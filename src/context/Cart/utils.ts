import { 
    CartProduct,
    CartDiscounts, 
    CartContextType,
} from './types';

export const getIndex = (list: Array<any>, prop: string, value: string | number): number => {
    if (list.length > 0 ) {
        for (let i in list) {
            if (list[i][prop] === value) {
                return Number(i);
            }
        }
    }
    return -1;
};

export const addProduct = (product: any, quantity: number, products: Array<CartProduct>): Array<CartProduct> => {
    const index = getIndex(products, 'id', product.id);
    
    if (products[index]) {
        products[index].quantity = quantity;
        products[index].total = products[index].price * quantity;
        return products;
    }

    return [...products, {
        ...product, 
        quantity, 
        total: product.price
    }];
};

export const removeProduct = (product: any, products: Array<CartProduct>): Array<CartProduct> => {
    const index = getIndex(products, 'id', product.id);

    if (products[index]) {
        products.splice(index, 1);
    }
    
    return products;
};

export const getDiscounts = (products: Array<CartProduct>, discounts: Array<any>): CartDiscounts => {

    const applied: Array<any> = [];
    const toApply: Array<string> = [];
    let totalApplied = 0;

    const reduceTotalByBrand = (acc: any, product: CartProduct) => {
        if (acc[product.brand]) {
            acc[product.brand].total += product.total;
        } else {
            acc[product.brand] = { total: product.total };
        }
        return acc;
    };

    const totalByBrand = products.reduce(reduceTotalByBrand, {});

    for (let brand in totalByBrand) {
        const index = getIndex(discounts, 'brand', brand);
        if (discounts[index]) {
            const discount = discounts[index];
            if (discount.threshold > totalByBrand[brand].total) {
                toApply.push(
                    `Agrega $${discount.threshold - totalByBrand[brand].total} más en productos ${brand} y aprovecha un descuento total de $${discount.discount} en tu compra!`
                );
            } else {
                totalApplied += discount.discount;
                applied.push({
                    message: `*Se aplicó un descuento de $${discount.discount} por haber comprado $${totalByBrand[brand].total} de productos ${brand}!`,
                    discount: discount.discount,
                });
            }
        }
    }

    return {toApply, applied, totalApplied};
};

export const countProducts = (products: Array<CartProduct> = []): number => (
    products.reduce((acc, product) => ( acc += product.quantity ), 0)
);

export const getSubTotal = (products: Array<CartProduct> = []): number => (
    products.reduce((acc, product) => ( acc += product.total ), 0)
);

export const getBaseCartContext = (): CartContextType => ({
    subTotal: 0,
    products: [],
    isOpen: false,
    productsCount: 0,
    open: (open: boolean) => {},
    remove: (product: any) => {},
    add: (product: any, quantity: number) => {},
    cartDiscounts: { toApply: [], applied: [], totalApplied: 0 },
});
