import React, { FC } from 'react';
import { withStyles, Popover } from '@material-ui/core';
import RdsMenuProps from './RdsMenu.props';
import RdsMenuStyles from './RdsMenu.styles';
import RdsList from '../RdsList';

/**
 * [RdsMenu Examples](https://diegoavieira.github.io/rdsystem/components/rds-menu)
 */
const RdsMenu: FC<RdsMenuProps> = ({ children, items, anchorEl, onClose, document }) => {
  return (
    <>
      {children}
      <Popover
        container={document && document.body}
        data-testid="rds-menu"
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={onClose}
      >
        <RdsList items={items} />
      </Popover>
    </>
  );
};

export default withStyles(RdsMenuStyles, { name: 'RdsMenu' })(RdsMenu);
