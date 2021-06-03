import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Header from '../components/Header';
import Filters from '../components/Filters';
import Product from '../components/Product';
import Products from '../components/Products';
import CartTotal from '../components/CartTotal';
import CartButton from '../components/CartButton';
import InputNumber from '../components/InputNumber';
import CartMessages from '../components/CartMessages';
import CartProducts from '../components/CartProducts';


describe('Renders components', () => {
  test('CartButton', () => {
    const props = {
      count: 2,
      onClick: () => {}
    };

    render(<CartButton {...props} />)
  });

  test('Header', () => {
    const props = {};

    render(<Header {...props} />);
  });

  test('Filters', () => {
    const testMessage = 'En construcción';
    const props = {};

    render(<Filters {...props} />)

    expect(screen.getByText(testMessage)).toBeInTheDocument()
  });

  test('Product', () => {
    const props = {
      id: 22,
      brand: 'test',
      image: 'dasgh',
      price: 222,
      description: 'description test',
      onAction: () => {},
    };

    render(<Product {...props} />)
  });

  test('CartMessages', () => {
    const props = {};

    render(<CartMessages {...props} />)

  });

  test('CartTotal', () => {
    const props = {};

    render(<CartTotal {...props} />)

  });

  test('InputNumber', () => {
    const props = {
      value: 2,
      onChange: () => {}
    };

    render(<InputNumber {...props} />);
  });

  test('CartProducts', () => {
    const props = {};

    render(<CartProducts {...props} />);
  });

  test('Products', () => {
    const props = {};
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <Products {...props} />
      </QueryClientProvider>
    )
  });
});
