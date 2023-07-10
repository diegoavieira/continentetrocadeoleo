import React from 'react';
import { RdsContainer } from '@rdsystem/components';
import { Marked } from '@components';

const ThemePage = () => {
  return (
    <RdsContainer>
      <Marked file="src/docs/theme/theme.md" />
    </RdsContainer>
  );
};

export default ThemePage;
