import React from 'react';
import { render } from '@testing-library/react';
import GettingStartedPage from './GettingStartedPage';

describe('<GettingStartedPage />', () => {
  test('should has rendered', () => {
    render(<GettingStartedPage />);
  });
});
