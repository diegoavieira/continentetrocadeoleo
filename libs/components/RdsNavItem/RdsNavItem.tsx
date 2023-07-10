import React, { FC, useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  withStyles,
  ListItem,
  ListItemText,
  Collapse,
  List,
  Tooltip,
  IconButton,
  ListItemSecondaryAction,
  Popover
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import RdsNavItemProps from './RdsNavItem.props';
import RdsNavItemStyles from './RdsNavItem.styles';
import clsx from 'clsx';

/**
 * [RdsNavItem Examples](https://diegoavieira.github.io/rdsystem/components/rds-nav-item)
 */
const RdsNavItem: FC<RdsNavItemProps> = ({
  item,
  nested = 0,
  classes,
  expanded,
  onExpand,
  toggle,
  opened,
  onOpen,
  onClose,
  document,
  onToggle
}) => {
  const history = useHistory();
  const location = useLocation();
  const ref = useRef(null);

  const [expandedNested, setExpandedNested] = useState<string | false>(false);

  const onExpandNested = (item: RdsNavItemProps['item'], newExpanded: boolean) => {
    setExpandedNested(newExpanded ? item.key : false);
  };

  useEffect(() => {
    const locationSplited = location.pathname.split('/');
    setExpandedNested(locationSplited[nested + 2]);
  }, [nested, location]);

  const onClosePopover = () => {
    onClose && onClose();
  };

  const onClick = (item: RdsNavItemProps['item']) => {
    if (item.path) {
      history.push(item.path);
      onClosePopover();
      onToggle && onToggle();
    }

    onExpand && onExpand(item, !expanded);
  };

  const onOpenPopover = (item: RdsNavItemProps['item']) => {
    if (item.path) {
      history.push(item.path);
    }

    onOpen && onOpen(item);
  };

  const actived = (item: RdsNavItemProps['item']): boolean => {
    if (item.items) {
      return !!item.items.find((itemNested) => {
        if (itemNested.path === location.pathname.split('/')[nested + 1]) {
          return true;
        } else {
          return actived(itemNested);
        }
      });
    } else {
      const splitPath = item.path?.split('/') || [];
      const splitLocation = location.pathname.split('/');

      return splitPath[nested + 1] === splitLocation[nested + 1];
    }
  };

  const nestedItems = (items: RdsNavItemProps['item'][]) => {
    return (
      <>
        {items.map(
          (item) =>
            !item.hidden && (
              <RdsNavItem
                key={item.key}
                item={item}
                classes={classes}
                nested={nested + 1}
                expanded={item.key === expandedNested}
                onExpand={onExpandNested}
                toggle={toggle}
                onClose={onClosePopover}
                onToggle={onToggle}
              />
            )
        )}
      </>
    );
  };

  return (
    <>
      <ListItem
        data-testid="rds-nav-item"
        className={clsx(classes.root, `${toggle ? 'collapse-' : 'popover-'}${nested}`, {
          [classes.active]: actived(item),
          ['has-icon']: item.icon
        })}
        button
        onClick={() => onClick(item)}
        component="li"
      >
        <ListItemText classes={{ primary: classes.text }} primary={item.title} />
        {item.items && (
          <IconButton
            disableRipple
            className={clsx(classes.expandIcon, {
              [classes.expanded]: expanded,
              [classes.expandIconActived]: actived(item)
            })}
          >
            <ExpandMoreIcon />
          </IconButton>
        )}
        {item.icon && (
          <ListItemSecondaryAction className={clsx(classes.icon, { [classes.iconButton]: nested === 0 && !toggle })}>
            <Tooltip
              PopperProps={{ container: document && document.body }}
              arrow
              title={item.title || ''}
              disableHoverListener={nested > 0}
              placement="right"
            >
              <IconButton
                edge="start"
                className={clsx({ [classes.iconActived]: actived(item) })}
                onClick={() => onOpenPopover(item)}
                ref={ref}
              >
                {item.icon}
              </IconButton>
            </Tooltip>
          </ListItemSecondaryAction>
        )}
      </ListItem>
      {item.items &&
        (toggle || nested > 0 ? (
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <List disablePadding>{nestedItems(item.items)}</List>
          </Collapse>
        ) : (
          <Popover
            container={document && document.body}
            open={!!opened}
            anchorEl={ref.current}
            onClose={onClosePopover}
          >
            <List>{nestedItems(item.items)}</List>
          </Popover>
        ))}
    </>
  );
};

export default withStyles(RdsNavItemStyles, { name: 'RdsNavItem' })(RdsNavItem);
