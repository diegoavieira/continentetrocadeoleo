import { WithStyles } from '@material-ui/core';
import RdsContentStyles from './RdsContent.styles';

export default interface RdsContentProps extends WithStyles<typeof RdsContentStyles> {
  /**
   * Children.
   */
  children: JSX.Element | JSX.Element[];
  /**
   * If has `RdsHeader` and property `fixed` is `true`.
   */
  hasHeaderFixed?: boolean;
  /**
   * If has `RdsDrawer.
   */
  hasDrawer?: boolean;
  /**
   * If has `RdsFooter.
   */
  hasFooter?: boolean;
}
