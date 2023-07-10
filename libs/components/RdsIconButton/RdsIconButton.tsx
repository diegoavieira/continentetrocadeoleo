import React, { FC } from 'react';
import { withStyles, IconButton, Tooltip } from '@material-ui/core';
import RdsIconButtonProps from './RdsIconButton.props';
import RdsIconButtonStyles from './RdsIconButton.styles';

/**
 * [RdsIconButton Examples](https://diegoavieira.github.io/rdsystem/components/rds-icon-button)
 */
const RdsIconButton: FC<RdsIconButtonProps> = ({
  classes,
  children,
  color,
  margin = 0,
  tooltip,
  disabled = false,
  onClick,
  document
}) => {
  return (
    <Tooltip
      arrow
      title={tooltip || ''}
      disableHoverListener={!tooltip}
      PopperProps={{ container: document && document.body }}
    >
      <IconButton
        data-testid="rds-icon-button"
        className={classes.root}
        color={color}
        style={{ margin }}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default withStyles(RdsIconButtonStyles, { name: 'RdsIconButton' })(RdsIconButton);
