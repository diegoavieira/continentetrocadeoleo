import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('should render page HomePage', () => {
    window.history.pushState({}, '', '/');

    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
