import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RdsList from './RdsList';

const items = [
  {
    key: 'primary',
    primary: 'Primary'
  },
  {
    key: 'subheader',
    subheader: 'Subheader'
  },
  {
    key: 'primary2',
    primary: 'Primary2',
    items: [
      {
        key: 'nested',
        primary: 'Nested',
        secondary: 'Secondary'
      }
    ]
  }
];

describe('<RdsList />', () => {
  test('should has prop items', () => {
    render(<RdsList items={items} />);
    expect(screen.getByTestId('rds-list')).toBeDefined();
  });

  test('should onExpanded be called', () => {
    render(<RdsList items={items} />);

    fireEvent.click(screen.getByText(/primary2/i));
    expect(screen.getByText(/nested/i)).toBeTruthy();

    fireEvent.click(screen.getByText(/primary2/i));
  });
});
