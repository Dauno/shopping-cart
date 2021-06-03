import {
  addProduct, 
  getSubTotal,
  getDiscounts, 
  removeProduct, 
  countProducts,
} from '../context/Cart/utils';

import { data as productsData } from './dummy/01-products.json';
import { data as discountsData } from './dummy/02-discounts.json';

describe('utils context', () => {
  
  test('Add product to empty cart', () => {
    const product = productsData[0];

    const cart = [{
      ...product, 
      quantity: 1, 
      total: product.price 
    }];

    const reponse = addProduct(product, 1, cart);

    expect(reponse).toStrictEqual(cart)
  });

  test('Add cart product', () => {
    const product = productsData[0];

    const cart = [{
      ...product, 
      quantity: 1, 
      total: product.price 
    }];

    const reponse = addProduct(product, 2, cart);

    expect(reponse).toStrictEqual(cart)
  });

  test('Get cart subtotal', () => {

    const cart = [
      {
        ...productsData[0], 
        quantity: 1, 
        total: productsData[0].price 
      },
      {
        ...productsData[1], 
        quantity: 1, 
        total: productsData[1].price 
      }
    ];

    const reponse = getSubTotal(cart);

    expect(reponse).toStrictEqual(120000)
  });

  test('Get cart discounts', () => {

    const cart = [
      {
        ...productsData[0], 
        quantity: 1, 
        total: productsData[0].price 
      },
      {
        ...productsData[1], 
        quantity: 1, 
        total: productsData[1].price 
      }
    ];

    const expected = {
      toApply: [],
      applied: [
        {
          message: '*Se aplicó un descuento de $8000 por haber comprado $120000 de productos Marca1!',
          discount: 8000
        }
      ],
      totalApplied: 8000
    };

    const reponse = getDiscounts(cart, discountsData);

    expect(reponse).toStrictEqual(expected)
  });

  test('Get cart message', () => {

    const cart = [
      {
        ...productsData[0], 
        quantity: 1, 
        total: productsData[0].price 
      },
    ];

    const expected = {
      toApply: [
        'Agrega $40000 más en productos Marca1 y aprovecha un descuento total de $8000 en tu compra!'
      ],
      applied: [],
      totalApplied: 0
    };

    const reponse = getDiscounts(cart, discountsData);
    
    expect(reponse).toStrictEqual(expected)
  });

  test('Remove cart Product', () => {
    const product = productsData[0];
    const cart = [{
      ...product, 
      quantity: 1, 
      total: product.price 
    }];


    const reponse = removeProduct(product, cart);
    
    expect(reponse).toStrictEqual([])
  });

  test('Count cart Products', () => {
    const cart = [
      {
        ...productsData[0], 
        quantity: 1, 
        total: productsData[0].price 
      },
      {
        ...productsData[1], 
        quantity: 2, 
        total: productsData[1].price * 2
      }
    ];

    const reponse = countProducts(cart);
    
    expect(reponse).toStrictEqual(3);
  });

});
