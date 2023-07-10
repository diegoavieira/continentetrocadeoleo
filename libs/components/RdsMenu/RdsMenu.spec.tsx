import React from 'react';
import { render } from '@testing-library/react';
import RdsMenu from './RdsMenu';

const items = [
  {
    key: 'primary',
    primary: 'Primary'
  }
];

describe('<RdsMenu />', () => {
  test('should be defined', () => {
    render(
      <RdsMenu items={items} onClose={() => ({})} anchorEl={null}>
        <button></button>
      </RdsMenu>
    );
  });
});
