import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RdsNavItem from './RdsNavItem';

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
    key: 'getting-started',
    title: 'Getting Started',
    icon: <span>icon</span>,
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
      },
      {
        key: 'theme',
        title: 'Theme',
        items: [
          {
            key: 'test',
            title: 'Test',
            path: '/components/theme/test'
          }
        ]
      }
    ]
  }
];

describe('<RdsNavItem />', () => {
  test('should has prop items', () => {
    render(<RdsNavItem item={items[0]} />);
    expect(screen.getByTestId('rds-nav-item')).toBeDefined();
  });

  test('should onExpandedNested be called', () => {
    render(<RdsNavItem item={items[1]} toggle expanded />);

    fireEvent.click(screen.getByText(/theme/i));
    expect(screen.getByText(/test/i)).toBeTruthy();

    fireEvent.click(screen.getByText(/theme/i));
  });

  test('should onOpenPopover be called', () => {
    render(<RdsNavItem item={items[0]} toggle expanded />);

    fireEvent.click(screen.getByText(/icon/i));
    expect(location.pathname).toBe('/');
  });

  test('should has prop document', () => {
    render(<RdsNavItem item={items[0]} document={document} />);
    expect(screen.getByTestId('rds-nav-item')).toBeDefined();
  });

  test('should item title be undefinend', () => {
    const item = {
      key: 'getting-started',
      icon: <span>icon</span>,
      path: '/'
    };

    render(<RdsNavItem item={item} />);
    expect(screen.getByTestId('rds-nav-item')).toBeDefined();
  });

  test('should actived be called', () => {
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/components/theme/test'
      }
    });

    render(<RdsNavItem item={items[1]} toggle expanded nested={1} />);
    expect(screen.getAllByTestId('rds-nav-item')[0].className).toContain('RdsNavItem-active');
  });

  test('should actived be called with path undefinend', () => {
    const item = {
      key: 'getting-started',
      title: 'Getting Started'
    };

    render(<RdsNavItem item={item} toggle expanded />);
    expect(screen.getByTestId('rds-nav-item')).toBeDefined();
  });
});
