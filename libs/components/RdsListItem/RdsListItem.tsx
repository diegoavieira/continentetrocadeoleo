import React, { FC } from 'react';
import {
  withStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Collapse,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import RdsListItemProps from './RdsListItem.props';
import RdsListItemStyles from './RdsListItem.styles';
import RdsList from '../RdsList';
import clsx from 'clsx';

/**
 * [RdsListItem Examples](https://diegoavieira.github.io/rdsystem/components/rds-list-item)
 */
const RdsListItem: FC<RdsListItemProps> = ({ classes, item, expanded, onExpand, nested = 0 }) => {
  const onClick = (item: RdsListItemProps['item']) => {
    if (item.action) {
      item.action(item);
    }

    if (item.items) {
      onExpand && onExpand(item, !expanded);
    }
  };

  return (
    <>
      <ListItem
        button={(!!item.action || !!item.items) as true}
        data-testid="rds-list-item"
        className={clsx(classes.root, `nested-${nested}`)}
        onClick={() => onClick(item)}
        component="li"
      >
        {item.avatar && (
          <ListItemAvatar className={classes.avatar}>
            <Avatar src={item.avatar}></Avatar>
          </ListItemAvatar>
        )}
        {item.icon && <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>}
        <ListItemText primary={item.primary} secondary={item.secondary} />
        {item.secondaryAction && <ListItemSecondaryAction>{item.secondaryAction}</ListItemSecondaryAction>}
        {item.items && (
          <IconButton
            disableRipple
            className={clsx(classes.expandIcon, {
              [classes.expanded]: expanded
            })}
          >
            <ExpandMoreIcon />
          </IconButton>
        )}
      </ListItem>
      {item.items && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <RdsList items={item.items} nested={nested + 1} />
        </Collapse>
      )}
    </>
  );
};

export default withStyles(RdsListItemStyles, { name: 'RdsListItem' })(RdsListItem);
