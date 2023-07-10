import React from 'react';
import { render } from '@testing-library/react';
import Sandbox from './Sandbox';

describe('<Sandbox />', () => {
  test('should has rendered', () => {
    render(<Sandbox demo={<p></p>} code={<pre></pre>} />);
  });
});
