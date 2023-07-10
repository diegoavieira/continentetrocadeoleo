import React, { lazy } from 'react';
import { Layout } from '@components';
import { Route } from 'react-router-dom';

const HomePage = lazy(() => import('@pages/HomePage'));

const App = () => (
  <Layout>
    <Route exact path="/">
      <HomePage />
    </Route>
  </Layout>
);

export default App;
