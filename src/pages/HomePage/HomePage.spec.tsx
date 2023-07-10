import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage';

describe('<HomePage />', () => {
  test('should has rendered', () => {
    render(<HomePage />);
  });
});
