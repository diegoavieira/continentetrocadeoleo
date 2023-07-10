import React from 'react';
import { RdsContainer } from '@rdsystem/components';
import { Marked } from '@components';
import { layout } from '@docs';

const LayoutPage = () => {
  return (
    <RdsContainer>
      <Marked file="src/docs/layout/layout.md" sandboxes={layout} />
    </RdsContainer>
  );
};

export default LayoutPage;
