import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import { Route } from 'react-router-dom';

describe('<Layout />', () => {
  test('should has rendered', () => {
    render(
      <Layout>
        <Route />
      </Layout>
    );

    expect(screen.getByTestId('rds-content').className).toContain('RdsContent-root');
  });
});
