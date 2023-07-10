import { ReactNode } from 'react';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import RdsMenuStyles from './RdsMenu.styles';
import RdsListItemProps from '../RdsListItem/RdsListItem.props';

export default interface RdsMenuProps extends WithStyles<typeof RdsMenuStyles> {
  /**
   * Component action.
   */
  children: ReactNode;
  /**
   * Items.
   */
  items: RdsListItemProps['item'][];
  /**
   * Close menu.
   */
  onClose: () => void;
  /**
   * Anchor element.
   */
  anchorEl: HTMLElement | null;
  /**
   * Document.
   */
  document?: Document;
}
