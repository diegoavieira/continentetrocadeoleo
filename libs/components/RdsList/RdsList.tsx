import React, { FC, useState } from 'react';
import { withStyles, List, ListSubheader } from '@material-ui/core';
import RdsListProps from './RdsList.props';
import RdsListStyles from './RdsList.styles';
import RdsListItem from '../RdsListItem';
import RdsListItemProps from '../RdsListItem/RdsListItem.props';
import clsx from 'clsx';

/**
 * [RdsList Examples](https://diegoavieira.github.io/rdsystem/components/rds-list)
 */
const RdsList: FC<RdsListProps> = ({ classes, items, nested = 0 }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const onExpand = (item: RdsListItemProps['item'], newExpanded: boolean) => {
    setExpanded(newExpanded ? item.key : false);
  };

  return (
    <List disablePadding={nested > 0} data-testid="rds-list" className={clsx(classes.root, `nested-${nested}`)}>
      {items &&
        items.map((item) =>
          item.subheader
            ? !item.hidden && (
                <ListSubheader key={item.key} className={classes.subheader}>
                  {item.subheader}
                </ListSubheader>
              )
            : !item.hidden && (
                <RdsListItem
                  key={item.key}
                  item={item}
                  expanded={item.key === expanded}
                  onExpand={onExpand}
                  nested={nested}
                />
              )
        )}
    </List>
  );
};

export default withStyles(RdsListStyles, { name: 'RdsList' })(RdsList);
