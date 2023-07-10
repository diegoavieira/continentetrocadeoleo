import { WithStyles } from '@material-ui/core';
import RdsDrawerStyles from './RdsDrawer.styles';

export default interface RdsDrawerProps extends WithStyles<typeof RdsDrawerStyles> {
  /**
   * Document.
   */
  document?: Document;
  /**
   * Children.
   */
  children: JSX.Element;
  /**
   * Define if is mobile.
   */
  isMobile?: boolean;
  /**
   * If has property `hasHeaderFixed` from `RdsHeader`, this will be `true`  .
   */
  hasHeaderFixed?: boolean;
  /**
   * Open and close.
   */
  toggle?: boolean;
  /**
   * Toggle open and close.
   */
  onToggle?: () => void;
}
