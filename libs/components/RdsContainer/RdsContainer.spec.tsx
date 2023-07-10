import React from 'react';
import { render, screen } from '@testing-library/react';
import RdsContainer from './RdsContainer';

describe('<RdsContainer />', () => {
  test('should has one child element', () => {
    render(
      <RdsContainer>
        <div />
      </RdsContainer>
    );

    expect(screen.getByTestId('rds-container').childElementCount).toBe(1);
  });

  test('should has two children elements', () => {
    render(
      <RdsContainer>
        <div />
        <p />
      </RdsContainer>
    );

    expect(screen.getByTestId('rds-container').childElementCount).toBe(2);
  });

  test('should prop disableGutters to be true', () => {
    render(
      <RdsContainer disableGutters>
        <div />
      </RdsContainer>
    );

    expect(screen.getByTestId('rds-container').className).toContain('RdsContainer-disableGutters');
  });

  test('should prop maxWidth to be lg', () => {
    render(
      <RdsContainer maxWidth="lg">
        <div />
      </RdsContainer>
    );

    expect(screen.getByTestId('rds-container').className).toContain('maxWidthLg');
  });
});
