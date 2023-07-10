import React from 'react';
import { render, screen } from '@testing-library/react';
import RdsMain from './RdsMain';

describe('<RdsMain />', () => {
  test('should has one child element', () => {
    render(
      <RdsMain>
        <div />
      </RdsMain>
    );

    expect(screen.getByTestId('rds-main').childElementCount).toBe(1);
  });

  test('should has two children elements', () => {
    render(
      <RdsMain>
        <div />
        <p />
      </RdsMain>
    );

    expect(screen.getByTestId('rds-main').childElementCount).toBe(2);
  });

  test('should prop hasHeaderFixed to be true', () => {
    render(
      <RdsMain fixed>
        <div />
      </RdsMain>
    );

    expect(screen.getByTestId('rds-main').className).toContain('RdsMain-fixed');
  });
});
