import React from 'react';
import { render } from '@testing-library/react';
import RdsTablePage from './RdsTablePage';

describe('<RdsTablePage />', () => {
  test('should has rendered', () => {
    render(<RdsTablePage />);
  });
});
