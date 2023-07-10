import React from 'react';
import { render, screen } from '@testing-library/react';
import RdsImage from './RdsImage';

describe('<RdsImage />', () => {
  test('should prop src be defined', () => {
    render(<RdsImage src="test" />);

    expect(screen.getByTestId('rds-image')).toBeDefined();
  });
});
