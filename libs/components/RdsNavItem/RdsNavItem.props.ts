import { WithStyles } from '@material-ui/core/styles/withStyles';
import RdsNavItemStyles from './RdsNavItem.styles';

export default interface RdsNavItemProps extends WithStyles<typeof RdsNavItemStyles> {
  /**
   * Document.
   */
  document?: Document;
  /**
   * Navigation item.
   */
  item: {
    key: string;
    icon?: JSX.Element;
    title?: string;
    path?: string;
    items?: RdsNavItemProps['item'][];
    hidden?: boolean;
  };
  /**
   * Nested index. Default is 0;
   */
  nested?: number;
  /**
   * Define expanded item.
   */
  expanded?: boolean;
  /**
   * OnExpand item.
   */
  onExpand?: (item: RdsNavItemProps['item'], newExpanded: boolean) => void;
  /**
   * Drawer opened and closed.
   */
  toggle?: boolean;
  /**
   * Define opened item where not expanded.
   */
  opened?: boolean;
  /**
   * OnOpen item where not expanded.
   */
  onOpen?: (item: RdsNavItemProps['item']) => void;
  /**
   * OnClose item where not expanded.
   */
  onClose?: () => void;
  /**
   * Toggle RdsDrawer.
   */
  onToggle?: () => void;
}
