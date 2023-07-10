import React from 'react';
import { render, screen } from '@testing-library/react';
import RdsText from './RdsText';

describe('<RdsText />', () => {
  test('should prop children be defined', () => {
    render(<RdsText>Test</RdsText>);
    expect(screen.getByTestId('rds-text')).toBeDefined();
  });
});
