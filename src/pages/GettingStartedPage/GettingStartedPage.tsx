import React from 'react';
import { RdsContainer } from '@rdsystem/components';
import { Marked } from '@components';

const GettingStartedPage = () => {
  return (
    <RdsContainer>
      <Marked file="src/docs/getting-started/getting-started.md" />
    </RdsContainer>
  );
};

export default GettingStartedPage;
