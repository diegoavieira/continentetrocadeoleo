import React from 'react';
import { render, screen } from '@testing-library/react';
import RdsIconButton from './RdsIconButton';

describe('<RdsIconButton />', () => {
  test('should prop children be defined', () => {
    render(<RdsIconButton onClick={() => console.log('clicked')}>Test</RdsIconButton>);
    expect(screen.getByTestId('rds-icon-button')).toBeDefined();
  });
});
