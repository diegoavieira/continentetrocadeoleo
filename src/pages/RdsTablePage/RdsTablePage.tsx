import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { RdsContainer, RdsTable } from '@rdsystem/components';
// import { Marked } from '@components';

const RdsTablePage = () => {
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

  return (
    <RdsContainer>
      {/* <Marked file="src/docs/components/installation/installation.md" /> */}
      <Card>
        <CardContent>
          <RdsTable height="calc(100vh - 128px)" columns={columns} />
        </CardContent>
      </Card>
    </RdsContainer>
  );
};

export default RdsTablePage;
