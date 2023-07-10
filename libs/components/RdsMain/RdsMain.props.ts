import { WithStyles } from '@material-ui/core';
import RdsMainStyles from './RdsMain.styles';

export default interface RdsMainProps extends WithStyles<typeof RdsMainStyles> {
  /**
   * Children.
   */
  children: JSX.Element | JSX.Element[];
  /**
   * Fix scroll.
   */
  fixed?: boolean;
}
