import React from 'react';
import { render } from '@testing-library/react';
import Marked from './Marked';

describe('<Marked />', () => {
  test('should has rendered', () => {
    render(<Marked file="README.md" />);
  });
});
