import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RdsNav from './RdsNav';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  }),
  useLocation: jest.fn().mockReturnValue({
    pathname: '/',
    search: '',
    hash: '',
    state: null,
    key: '5nvxpbdafa'
  })
}));

const items = [
  {
    key: 'main',
    items: [
      {
        key: 'getting-started',
        title: 'Getting Started',
        path: '/'
      },
      {
        key: 'components',
        title: 'Components',
        icon: <span>icon</span>,
        items: [
          {
            key: 'installation',
            title: 'Installation',
            path: '/components/installation'
          }
        ]
      }
    ]
  }
];

describe('<RdsNav />', () => {
  test('should has prop items', () => {
    render(<RdsNav items={items} />);
    expect(screen.getByTestId('rds-nav')).toBeDefined();
  });

  test('should onExpanded be called', () => {
    render(<RdsNav items={items} toggle />);

    fireEvent.click(screen.getByText(/components/i));
    expect(screen.getByText(/installation/i)).toBeTruthy();

    fireEvent.click(screen.getByText(/components/i));
  });

  test('should onOpen and onClose be called', () => {
    render(<RdsNav items={items} />);

    fireEvent.click(screen.getByText(/icon/i));
    expect(screen.getByText(/installation/i)).toBeTruthy();

    fireEvent.click(screen.getByText(/installation/i));
  });
});
