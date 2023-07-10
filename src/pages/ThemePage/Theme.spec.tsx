import React from 'react';
import { render } from '@testing-library/react';
import ThemePage from './ThemePage';

describe('<ThemePage />', () => {
  test('should has rendered', () => {
    render(<ThemePage />);
  });
});
