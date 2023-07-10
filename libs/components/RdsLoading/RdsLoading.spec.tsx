import React from 'react';
import { render, screen } from '@testing-library/react';
import RdsLoading from './RdsLoading';

describe('<RdsLoading />', () => {
  test('should prop toggle be defined', () => {
    render(<RdsLoading />);
    expect(screen.getByTestId('rds-loading')).toBeDefined();
  });
});
