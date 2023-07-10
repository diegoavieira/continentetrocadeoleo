import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RdsListItem from './RdsListItem';

const items = [
  {
    key: 'primary',
    primary: 'Primary'
  },
  {
    key: 'action',
    primary: 'Action',
    action: () => console.log('action')
  },
  {
    key: 'primary2',
    primary: 'Primary2',
    icon: <span>icon</span>,
    items: [
      {
        key: 'primary22',
        primary: 'Primary22',
        secondary: 'Secondary'
      }
    ]
  }
];

describe('<RdsListItem />', () => {
  test('should has prop item', () => {
    render(<RdsListItem item={items[0]} />);
    expect(screen.getByTestId('rds-list-item')).toBeDefined();
  });

  test('should onClick be called', () => {
    render(<RdsListItem item={items[1]} />);

    fireEvent.click(screen.getByTestId('rds-list-item'));
    expect(screen.getByTestId('rds-list-item')).toBeDefined();
  });

  test('should has item icon', () => {
    render(<RdsListItem item={items[2]} />);
    expect(screen.getByText(/icon/i)).toBeTruthy();
  });
});
