import React from 'react';
import { render } from '@testing-library/react';
import RdsForm from './RdsForm';
import RdsField from '../RdsField';

describe('<RdsForm />', () => {
  test('should prop children be defined', () => {
    render(
      <RdsForm initialValues={{ test: '' }} onSubmit={() => console.log('submit')}>
        <RdsField name="test" />
      </RdsForm>
    );
  });
});
