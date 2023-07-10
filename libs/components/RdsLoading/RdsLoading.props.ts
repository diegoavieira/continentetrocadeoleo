import { WithStyles } from '@material-ui/core/styles/withStyles';
import RdsLoadingStyles from './RdsLoading.styles';

export default interface RdsLoadingProps extends WithStyles<typeof RdsLoadingStyles> {
  /**
   * Open and close. Default is true;
   */
  toggle?: boolean;
  /**
   * If not has `RdsHeader`.
   */
  notHasHeader?: boolean;
}
