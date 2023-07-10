import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('should render page GettingStarted', () => {
    window.history.pushState({}, '', '/');

    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText(/getting started/i)).toBeInTheDocument();
  });

  test('should render page LayoutPage', () => {
    window.history.pushState({}, '', '/layout');

    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText(/layout/i)).toBeInTheDocument();
  });

  test('should render page ThemePage', () => {
    window.history.pushState({}, '', '/theme');

    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText(/theme/i)).toBeInTheDocument();
  });

  test('should render page InstallComponentsPage', () => {
    window.history.pushState({}, '', '/components/installation');

    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText(/components/i)).toBeInTheDocument();
  });
});
