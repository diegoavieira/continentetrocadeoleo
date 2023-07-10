import React from 'react';
import { render } from '@testing-library/react';
import RdsTable from './RdsTable';

describe('<RdsTable />', () => {
  test('should has rendered', () => {
    const columns = [
      {
        key: 'test',
        title: 'test'
      },
      {
        key: 'test2',
        title: 'test2'
      },
      {
        key: 'test3',
        title: 'test3'
      }
    ];

    render(<RdsTable columns={columns} />);
  });
});
