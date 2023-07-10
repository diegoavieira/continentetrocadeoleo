import React, { FC } from 'react';
import { Container, withStyles } from '@material-ui/core';
import RdsContainerProps from './RdsContainer.props';
import RdsContainerStyles from './RdsContainer.styles';
import clsx from 'clsx';

/**
 * [RdsContainer Examples](https://diegoavieira.github.io/rdsystem/components/rds-container)
 */
const RdsContainer: FC<RdsContainerProps> = ({ children, maxWidth = 'md', disableGutters, classes }) => {
  return (
    <Container
      data-testid="rds-container"
      className={clsx(classes.root, { [classes.disableGutters]: disableGutters })}
      maxWidth={maxWidth}
      disableGutters={disableGutters}
    >
      {children}
    </Container>
  );
};

export default withStyles(RdsContainerStyles, { name: 'RdsContainer' })(RdsContainer);
