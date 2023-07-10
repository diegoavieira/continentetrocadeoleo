import React, { FC } from 'react';
import { AppBar, Toolbar as MuiToolbar, withStyles, createStyles, Theme } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import RdsHeaderProps from './RdsHeader.props';
import RdsHeaderStyles from './RdsHeader.styles';
import RdsIconButton from '../RdsIconButton';

const Toolbar = withStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: 56,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  })
)(MuiToolbar);

/**
 * [RdsHeader Examples](https://diegoavieira.github.io/rdsystem/components/rds-header)
 */
const RdsHeader: FC<RdsHeaderProps> = ({ children, fixed, color, onToggle, classes, document, toggleTooltip }) => {
  return (
    <AppBar data-testid="rds-header" className={classes.root} position={fixed ? 'fixed' : 'static'} color={color}>
      <Toolbar>
        {onToggle && (
          <RdsIconButton
            document={document}
            margin="0 4px 0 -12px"
            color="inherit"
            onClick={onToggle}
            tooltip={toggleTooltip}
          >
            <MenuIcon />
          </RdsIconButton>
        )}
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(RdsHeaderStyles, { name: 'RdsHeader' })(RdsHeader);
