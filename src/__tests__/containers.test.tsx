import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import CartContainer from '../containers/Cart';
import MainContainer from '../containers/Main';
import FiltersContainer from '../containers/Filters';
import ProductsContainer from '../containers/Products';

describe('Renders containers', () => {

  test('CartContainer open', () => {
    const testMessage = 'Test Message';
    const props = {
      open: true,
      onClose: () => {}
    };

    render(<CartContainer {...props}>{testMessage}</CartContainer>)

    expect(screen.getByText(testMessage)).toBeInTheDocument()
  });

  test('CartContainer close', () => {
    const testMessage = 'Test Message';
    const props = {
      open: false,
      onClose: () => {}
    };

    render(<CartContainer {...props}>{testMessage}</CartContainer>)

    expect(screen.queryByText(testMessage)).toBeNull()
  });

  test('MainContainer', () => {
    const testMessage = 'Test Message';

    render(<MainContainer>{testMessage}</MainContainer>)

    expect(screen.getByText(testMessage)).toBeInTheDocument()
  });

  test('ProductsContainer', () => {
    const testMessage = 'Test Message';

    render(<ProductsContainer>{testMessage}</ProductsContainer>)

    expect(screen.getByText(testMessage)).toBeInTheDocument()
  });

  test('FiltersContainer', () => {
    const testMessage = 'Test Message';

    render(<FiltersContainer>{testMessage}</FiltersContainer>)

    expect(screen.getByText(testMessage)).toBeInTheDocument()
  });
});
