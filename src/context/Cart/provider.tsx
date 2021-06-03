import { useState, useEffect, useCallback } from 'react';

import {
    CartProduct,
    CartDiscounts, 
    CartContextProviderProps,
} from './types';
import {
    addProduct, 
    getSubTotal,
    getDiscounts, 
    removeProduct, 
    countProducts,
    getBaseCartContext,
} from './utils';
import CartContext from './context';
import { useGetRequest, Discount } from '../../api';


const CartProvider: React.FC<CartContextProviderProps> = ({ children }) => {
    const [subTotal, setSubTotal] = useState<number>(0);
    const [isOpen, setOpenCart] = useState<boolean>(false);
    const { data } = useGetRequest<Array<Discount>>('discount');
    const [productsCount, setProductsCount] = useState<number>(0);
    const [discounts, setDiscounts] = useState<Array<Discount>>([]);
    const [products, setProducts] = useState<Array<CartProduct>>([]);
    const [cartDiscounts, setCartDiscounts] = useState<CartDiscounts>(
        getBaseCartContext().cartDiscounts
    );

    useEffect(() => {
        if (data) {
            setDiscounts(data);
        }
    }, [data]);

    useEffect(() => {
        setCartDiscounts(() => 
            getDiscounts(products, discounts)
        );

        setProductsCount(() => 
            countProducts(products)
        );

        setSubTotal(() => 
            getSubTotal(products)
        );
        
    }, [products, discounts]);

    const add = useCallback((product: any, quantity: number): void => {
        setProducts((currentProduct: Array<CartProduct>) => 
            addProduct(product, quantity, [...currentProduct])
        );
    },[]);

    const remove = useCallback((product: any): void => {
        setProducts((currentProduct: Array<CartProduct>) => 
            removeProduct(product, [...currentProduct])
        );
    },[]);

    const open = (open: boolean): void => {
        setOpenCart(open)
    }

    return (
        <CartContext.Provider value={{ 
            add, 
            open, 
            isOpen,
            remove, 
            subTotal,
            products,
            cartDiscounts,
            productsCount,
        }}>
        {children}
        </CartContext.Provider>
    );
  };
  
  export default CartProvider;