import React from 'react';
import { render, screen } from '@testing-library/react';
import RdsContent from './RdsContent';

describe('<RdsContent />', () => {
  test('should has one child element', () => {
    render(
      <RdsContent>
        <div />
      </RdsContent>
    );

    expect(screen.getByTestId('rds-content').childElementCount).toBe(1);
  });

  test('should has two children elements', () => {
    render(
      <RdsContent>
        <div />
        <p />
      </RdsContent>
    );

    expect(screen.getByTestId('rds-content').childElementCount).toBe(2);
  });

  test('should prop hasHeaderFixed to be true', () => {
    render(
      <RdsContent hasHeaderFixed>
        <div />
      </RdsContent>
    );

    expect(screen.getByTestId('rds-content').className).toContain('RdsContent-hasHeaderFixed');
  });

  test('should prop hasDrawer to be true', () => {
    render(
      <RdsContent hasDrawer>
        <div />
      </RdsContent>
    );

    expect(screen.getByTestId('rds-content').className).toContain('RdsContent-hasDrawer');
  });

  test('should prop hasFooter to be true', () => {
    render(
      <RdsContent hasFooter>
        <div />
      </RdsContent>
    );

    expect(screen.getByTestId('rds-content').className).toContain('RdsContent-hasFooter');
  });
});
