import React from 'react';
import { render } from '@testing-library/react';
import LayoutPage from './LayoutPage';

describe('<LayoutPage />', () => {
  test('should has rendered', () => {
    render(<LayoutPage />);
  });
});
