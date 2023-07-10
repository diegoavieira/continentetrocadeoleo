import React from 'react';
import { RdsContainer } from '@rdsystem/components';
import { Marked } from '@components';

const InstallComponentsPage = () => {
  return (
    <RdsContainer>
      <Marked file="src/docs/install-components/install-components.md" />
    </RdsContainer>
  );
};

export default InstallComponentsPage;
