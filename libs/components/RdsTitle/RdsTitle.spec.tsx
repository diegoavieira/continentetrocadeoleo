import React from 'react';
import { render, screen } from '@testing-library/react';
import RdsTitle from './RdsTitle';

describe('<RdsTitle />', () => {
  test('should prop children be defined', () => {
    render(<RdsTitle>Test</RdsTitle>);
    expect(screen.getByTestId('rds-title')).toBeDefined();
  });
});
