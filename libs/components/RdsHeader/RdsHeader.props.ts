import { ReactNode } from 'react';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import RdsHeaderStyles from './RdsHeader.styles';

export default interface RdsHeaderProps extends WithStyles<typeof RdsHeaderStyles> {
  /**
   * Children.
   */
  children?: JSX.Element | JSX.Element[];
  /**
   * Fixed at the top.
   */
  fixed?: boolean;
  /**
   * Default is `primary`.
   */
  color?: 'inherit' | 'primary' | 'secondary' | 'default' | 'transparent';
  /**
   * Show menu button and toggle RdsDrawer.
   */
  onToggle?: () => void;
  /**
   * Document.
   */
  document?: Document;
  /**
   * Toggle tooltip.
   */
  toggleTooltip?: ReactNode;
}
