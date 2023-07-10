import React from 'react';
import { render } from '@testing-library/react';
import FormPage from './FormPage';

describe('<FormPage />', () => {
  test('should has rendered', () => {
    render(<FormPage />);
  });
});
