import { ReactNode } from 'react';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import RdsTableStyles from './RdsTable.styles';

interface ColumnItem {
  key: string;
  title?: string;
  render?: (row: unknown) => ReactNode;
  padding?: number | string;
}

export default interface RdsTableProps extends WithStyles<typeof RdsTableStyles> {
  /**
   * Columns.
   */
  columns: ColumnItem[];
  /**
   * Height. Default is `auto`;
   */
  height?: number | string;
}
