import { createContext } from 'react';
import { CartContextType } from './types';
import { getBaseCartContext } from './utils';
 
const CartContext = createContext<CartContextType>(getBaseCartContext());

export default CartContext