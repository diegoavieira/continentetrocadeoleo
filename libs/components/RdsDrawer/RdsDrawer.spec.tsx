import React from 'react';
import { render, screen } from '@testing-library/react';
import RdsDrawer from './RdsDrawer';

describe('<RdsDrawer />', () => {
  test('should has one child element', () => {
    render(
      <RdsDrawer>
        <div />
      </RdsDrawer>
    );

    expect(screen.getByTestId('rds-drawer').childElementCount).toBe(1);
  });

  test('should prop hasHeaderFixed to be true', () => {
    render(
      <RdsDrawer hasHeaderFixed>
        <div />
      </RdsDrawer>
    );

    const paper = screen.getByTestId('rds-drawer').firstElementChild;

    expect(paper?.className).toContain('RdsDrawer-hasHeaderFixed');
  });

  test('should prop isMobile and toggle to be true', () => {
    render(
      <RdsDrawer toggle isMobile>
        <div />
      </RdsDrawer>
    );

    expect(screen.getByTestId('rds-drawer').className).toContain('RdsDrawer-mobile');
  });

  test('should has prop document', () => {
    render(
      <RdsDrawer document={document}>
        <div />
      </RdsDrawer>
    );

    expect(screen.getByTestId('rds-drawer')).toBeDefined();
  });
});
