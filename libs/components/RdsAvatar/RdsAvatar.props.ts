import { ReactNode } from 'react';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import RdsAvatarStyles from './RdsAvatar.styles';
import RdsListItemProps from '../RdsListItem/RdsListItem.props';

export default interface RdsAvatarProps extends WithStyles<typeof RdsAvatarStyles> {
  /**
   * Items.
   */
  items?: RdsListItemProps['item'][];
  /**
   * Image source.
   */
  src?: string;
  /**
   * Document.
   */
  document?: Document;
  /**
   * Tooltip.
   */
  tooltip?: ReactNode;
}
