import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import { Route } from 'react-router-dom';

describe('<Layout />', () => {
  const processEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...processEnv };
  });

  afterAll(() => {
    process.env = processEnv;
  });

  test('should has rendered', () => {
    render(
      <Layout drawerNavItems={[{ key: 'test', title: 'Test' }]}>
        <Route />
      </Layout>
    );

    expect(screen.getByTestId('rds-content').className).toContain('RdsContent-root');
  });

  test('should has rendered in production', () => {
    process.env.NODE_ENV = 'production';

    render(
      <Layout drawerNavItems={[{ key: 'test', title: 'Test' }]}>
        <Route />
      </Layout>
    );

    expect(screen.getByTestId('rds-content').className).toContain('jss');
  });

  test('should be mobile', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 859
    });

    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn()
      };
    });

    render(
      <Layout drawerNavItems={[{ key: 'test', title: 'Test' }]}>
        <Route />
      </Layout>
    );
  });
});
