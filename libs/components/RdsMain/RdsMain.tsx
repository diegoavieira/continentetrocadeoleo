import React, { FC } from 'react';
import { withStyles } from '@material-ui/core';
import RdsMainProps from './RdsMain.props';
import RdsMainStyles from './RdsMain.styles';
import clsx from 'clsx';

/**
 * [RdsMain Examples](https://diegoavieira.github.io/rdsystem/components/rds-main)
 */
const RdsMain: FC<RdsMainProps> = ({ children, fixed, classes }) => {
  return (
    <main data-testid="rds-main" className={clsx(classes.root, { [classes.fixed]: fixed, 'rds-scrollbar': fixed })}>
      {children}
    </main>
  );
};

export default withStyles(RdsMainStyles, { name: 'RdsMain' })(RdsMain);
