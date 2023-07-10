import React from 'react';
import { RdsContainer } from '@rdsystem/components';
import { Marked } from '@components';
import { form } from '@docs';

const FormPage = () => {
  return (
    <RdsContainer>
      <Marked file="src/docs/form/form.md" sandboxes={form} />
    </RdsContainer>
  );
};

export default FormPage;
