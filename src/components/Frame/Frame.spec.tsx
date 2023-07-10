import React from 'react';
import { render } from '@testing-library/react';
import Frame from './Frame';

describe('<Frame />', () => {
  test('should has rendered', () => {
    render(
      <Frame>
        <p></p>
      </Frame>
    );
  });
});
