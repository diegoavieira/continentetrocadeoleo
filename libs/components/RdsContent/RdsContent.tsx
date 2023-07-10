import React, { FC } from 'react';
import { CssBaseline, Theme, withStyles, createStyles } from '@material-ui/core';
import RdsContentProps from './RdsContent.props';
import RdsContentStyles from './RdsContent.styles';
import clsx from 'clsx';

const CssBaselineStyled = withStyles((theme: Theme) =>
  createStyles({
    '@global': {
      '.rds-scrollbar': {
        overflow: 'overlay'
      },
      '.rds-scrollbar-x': {
        overflowX: 'overlay'
      },
      '.rds-scrollbar-y': {
        overflowY: 'overlay'
      },
      '.rds-scrollbar::-webkit-scrollbar, .rds-scrollbar-x::-webkit-scrollbar, .rds-scrollbar-y::-webkit-scrollbar': {
        width: 10,
        height: 10
      },
      '.rds-scrollbar::-webkit-scrollbar-thumb, .rds-scrollbar-x::-webkit-scrollbar-thumb, .rds-scrollbar-y::-webkit-scrollbar-thumb':
        {
          backgroundColor: theme.palette.action.disabled,
          borderRadius: 10,
          border: '3px solid transparent',
          backgroundClip: 'content-box'
        },
      iframe: {
        borderWidth: 0
      }
    }
  })
)(CssBaseline);

/**
 * [RdsContent Examples](https://diegoavieira.github.io/rdsystem/components/rds-content)
 */
const RdsContent: FC<RdsContentProps> = ({ children, hasDrawer, hasHeaderFixed, hasFooter, classes }) => {
  return (
    <div
      data-testid="rds-content"
      className={clsx(classes.root, {
        [classes.hasDrawer]: hasDrawer,
        [classes.hasHeaderFixed]: hasHeaderFixed,
        [classes.hasFooter]: hasFooter
      })}
    >
      <CssBaselineStyled />
      {children}
    </div>
  );
};

export default withStyles(RdsContentStyles, { name: 'RdsContent' })(RdsContent);
