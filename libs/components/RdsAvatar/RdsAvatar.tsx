import React, { FC, MouseEvent, useState } from 'react';
import { withStyles, Avatar, createStyles } from '@material-ui/core';
import RdsAvatarProps from './RdsAvatar.props';
import RdsAvatarStyles from './RdsAvatar.styles';
import RdsMenu from '../RdsMenu';
import RdsListItemProps from '../RdsListItem/RdsListItem.props';
import RdsIconButton from '../RdsIconButton';

const RdsIconButtonStyled = withStyles(() =>
  createStyles({
    root: {
      padding: 0
    }
  })
)(RdsIconButton);

/**
 * [RdsAvatar Examples](https://diegoavieira.github.io/rdsystem/components/rds-avatar)
 */
const RdsAvatar: FC<RdsAvatarProps> = ({ classes, items, src, document, tooltip }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const mergeItems = (items: RdsListItemProps['item'][]) => {
    return items.map((item) => {
      if (item.action) {
        return {
          ...item,
          action: () => {
            item.action && item.action(item);
            onClose();
          }
        };
      }

      return item;
    });
  };

  return (
    <div className={classes.root} data-testid="rds-avatar">
      {items ? (
        <RdsMenu document={document} items={mergeItems(items)} anchorEl={anchorEl} onClose={onClose}>
          <RdsIconButtonStyled document={document} onClick={onOpen} tooltip={tooltip}>
            <Avatar src={src}></Avatar>
          </RdsIconButtonStyled>
        </RdsMenu>
      ) : (
        <Avatar src={src}></Avatar>
      )}
    </div>
  );
};

export default withStyles(RdsAvatarStyles, { name: 'RdsAvatar' })(RdsAvatar);
