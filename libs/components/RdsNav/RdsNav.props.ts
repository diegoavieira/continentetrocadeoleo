import { ComponentType } from 'react';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import RdsNavItemProps from '../RdsNavItem/RdsNavItem.props';
import RdsNavStyles from './RdsNav.styles';

export default interface RdsNavProps extends WithStyles<typeof RdsNavStyles> {
  /**
   * Document.
   */
  document?: Document;
  /**
   * Navigation items.
   */
  items: RdsNavItemProps['item'][];
  /**
   * RdsNavItem component.
   */
  RdsNavItemComponent?: ComponentType<Partial<RdsNavItemProps>>;
  /**
   * Drawer opened and closed.
   */
  toggle?: boolean;
  /**
   * Nested index. Default is 0;
   */
  nested?: number;
  /**
   * Toggle RdsDrawer.
   */
  onToggle?: () => void;
}
