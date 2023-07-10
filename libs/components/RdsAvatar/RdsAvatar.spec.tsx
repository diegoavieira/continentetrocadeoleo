import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RdsAvatar from './RdsAvatar';
import RdsListItemProps from '../RdsListItem/RdsListItem.props';

const items: RdsListItemProps['item'][] = [
  {
    key: 'user',
    primary: 'User'
  },
  {
    key: 'logout',
    primary: 'Logout',
    action: (item) => console.log(item)
  }
];

describe('<RdsAvatar />', () => {
  test('should has prop items', () => {
    render(<RdsAvatar items={items} />);

    fireEvent.click(screen.getByTestId('rds-icon-button'));
    expect(screen.getByText(/logout/i)).toBeDefined();

    fireEvent.click(screen.getByText(/logout/i));
  });

  test('should not has prop items', () => {
    render(<RdsAvatar />);
  });
});
