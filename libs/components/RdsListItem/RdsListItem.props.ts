import { ReactNode } from 'react';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import RdsListItemStyles from './RdsListItem.styles';

export default interface RdsListItemProps extends WithStyles<typeof RdsListItemStyles> {
  /**
   * Item.
   */
  item: {
    key: string;
    icon?: JSX.Element;
    primary?: ReactNode;
    secondary?: ReactNode;
    action?: (item: RdsListItemProps['item']) => void;
    secondaryAction?: ReactNode;
    items?: RdsListItemProps['item'][];
    hidden?: boolean;
    subheader?: string;
    avatar?: string;
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
  onExpand?: (item: RdsListItemProps['item'], newExpanded: boolean) => void;
}
