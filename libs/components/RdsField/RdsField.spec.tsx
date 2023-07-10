import React from 'react';
import { render } from '@testing-library/react';
import RdsField from './RdsField';
import RdsForm from '../RdsForm';

describe('<RdsField />', () => {
  test('should has rendered', () => {
    render(
      <RdsForm initialValues={{ test: '' }} onSubmit={() => console.log('submit')}>
        <RdsField name="test" />
      </RdsForm>
    );
  });
});
