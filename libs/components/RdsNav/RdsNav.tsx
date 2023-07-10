import React, { FC, useEffect, useState } from 'react';
import { withStyles, List, ListSubheader } from '@material-ui/core';
import RdsNavProps from './RdsNav.props';
import RdsNavStyles from './RdsNav.styles';
import RdsNavItem from '../RdsNavItem';
import RdsNavItemProps from '../RdsNavItem/RdsNavItem.props';

/**
 * [RdsNav Examples](https://diegoavieira.github.io/rdsystem/components/rds-nav)
 */
const RdsNav: FC<RdsNavProps> = ({
  items: itemsList,
  classes,
  RdsNavItemComponent = RdsNavItem,
  toggle,
  nested = 0,
  document,
  onToggle
}) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [opened, setOpened] = useState<string | false>(false);

  const onExpand = (item: RdsNavItemProps['item'], newExpanded: boolean) => {
    setExpanded(newExpanded ? item.key : false);
  };

  const onOpen = (item: RdsNavItemProps['item']) => {
    setOpened(item.key);
  };

  const onClose = () => {
    setOpened(false);
  };

  useEffect(() => {
    const locationSplited = window.location.pathname.split('/');
    setExpanded(locationSplited[nested + 1]);
  }, [nested]);

  return (
    <nav data-testid="rds-nav" className={classes.root}>
      {itemsList.map(
        (itemList) =>
          !itemList.hidden && (
            <List
              key={itemList.key}
              className={classes.list}
              subheader={
                itemList.title ? (
                  <ListSubheader className={classes.subheader}>{itemList.title}</ListSubheader>
                ) : undefined
              }
            >
              {itemList.items &&
                itemList.items.map(
                  (item) =>
                    !item.hidden && (
                      <RdsNavItemComponent
                        document={document}
                        key={item.key}
                        item={item}
                        expanded={item.key === expanded}
                        onExpand={onExpand}
                        toggle={toggle}
                        opened={item.key === opened}
                        onOpen={onOpen}
                        onClose={onClose}
                        onToggle={onToggle}
                      />
                    )
                )}
            </List>
          )
      )}
    </nav>
  );
};

export default withStyles(RdsNavStyles, { name: 'RdsNav' })(RdsNav);
