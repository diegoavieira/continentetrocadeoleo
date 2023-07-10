import { WithStyles } from '@material-ui/core/styles/withStyles';
import RdsListItemProps from '../RdsListItem/RdsListItem.props';
import RdsListStyles from './RdsList.styles';

export default interface RdsListProps extends WithStyles<typeof RdsListStyles> {
  /**
   * Items.
   */
  items: RdsListItemProps['item'][];
  /**
   * Nested index. Default is 0;
   */
  nested?: number;
}
