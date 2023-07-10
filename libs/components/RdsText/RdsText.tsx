import React, { FC } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import RdsTextProps from './RdsText.props';
import RdsTextStyles from './RdsText.styles';
import clsx from 'clsx';

/**
 * [RdsText Examples](https://diegoavieira.github.io/rdsystem/components/rds-text)
 */
const RdsText: FC<RdsTextProps> = ({ classes, type, children, color, light, align, margin = 0, onClick }) => {
  return (
    <Typography
      data-testid="rds-text"
      className={clsx(classes.root, { [classes.light]: light, [classes.link]: type === 'a' })}
      component={type || 'p'}
      variant="body1"
      color={color}
      align={align}
      style={{ margin }}
      onClick={onClick && onClick}
    >
      {children}
    </Typography>
  );
};

export default withStyles(RdsTextStyles, { name: 'RdsText' })(RdsText);
