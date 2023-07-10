import React from 'react';
import { render } from '@testing-library/react';
import InstallComponentsPage from './InstallComponentsPage';

describe('<InstallComponentsPage />', () => {
  test('should has rendered', () => {
    render(<InstallComponentsPage />);
  });
});
