import React from 'react';
import { render, screen } from '@testing-library/react';
import RdsHeader from './RdsHeader';

describe('<RdsHeader />', () => {
  test('should has one child element', () => {
    render(
      <RdsHeader>
        <div />
      </RdsHeader>
    );

    expect(screen.getByTestId('rds-header').childElementCount).toBe(1);
  });

  test('should prop fixed to be true', () => {
    render(
      <RdsHeader fixed>
        <div />
      </RdsHeader>
    );

    expect(screen.getByTestId('rds-header').className).toContain('positionFixed');
  });
});
