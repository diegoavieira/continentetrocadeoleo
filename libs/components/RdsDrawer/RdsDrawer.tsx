import React, { FC, useEffect, useState } from 'react';
import { Drawer, withStyles } from '@material-ui/core';
import RdsDrawerProps from './RdsDrawer.props';
import RdsDrawerStyles from './RdsDrawer.styles';
import clsx from 'clsx';

/**
 * [RdsDrawer Examples](https://diegoavieira.github.io/rdsystem/components/rds-drawer)
 */
const RdsDrawer: FC<RdsDrawerProps> = ({ hasHeaderFixed, onToggle, toggle, isMobile, classes, children, document }) => {
  const [variant, setVariant] = useState<'permanent' | 'temporary'>('permanent');

  useEffect(() => {
    setVariant(isMobile ? 'temporary' : 'permanent');
  }, [isMobile]);

  return (
    <Drawer
      data-testid="rds-drawer"
      container={document && document.body}
      className={clsx(classes.root, !isMobile ? { [classes.open]: toggle, [classes.close]: !toggle } : classes.mobile)}
      variant={variant}
      open={toggle}
      onClose={onToggle}
      classes={{
        paper: clsx(
          classes.paper,
          !isMobile && { [classes.open]: toggle, [classes.close]: !toggle, [classes.hasHeaderFixed]: hasHeaderFixed },
          'rds-scrollbar-y'
        )
      }}
    >
      {children}
    </Drawer>
  );
};

export default withStyles(RdsDrawerStyles, { name: 'RdsDrawer' })(RdsDrawer);
