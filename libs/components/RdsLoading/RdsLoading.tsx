import React, { FC, useEffect } from 'react';
import { withStyles, Backdrop, CircularProgress } from '@material-ui/core';
import RdsLoadingProps from './RdsLoading.props';
import RdsLoadingStyles from './RdsLoading.styles';
import clsx from 'clsx';

/**
 * [RdsLoading Examples](https://diegoavieira.github.io/rdsystem/components/rds-loading)
 */
const RdsLoading: FC<RdsLoadingProps> = ({ classes, toggle = true, notHasHeader }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.removeAttribute('style');
    };
  }, []);

  return (
    <Backdrop
      data-testid="rds-loading"
      className={clsx(classes.root, { [classes.notHasHeader]: notHasHeader })}
      open={toggle}
    >
      <CircularProgress />
    </Backdrop>
  );
};

export default withStyles(RdsLoadingStyles, { name: 'RdsLoading' })(RdsLoading);
