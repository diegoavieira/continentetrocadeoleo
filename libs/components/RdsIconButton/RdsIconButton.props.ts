import { ReactNode, MouseEvent } from 'react';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import RdsIconButtonStyles from './RdsIconButton.styles';

export default interface RdsIconButtonProps extends WithStyles<typeof RdsIconButtonStyles> {
  /**
   * Tooltip.
   */
  tooltip?: ReactNode;
  /**
   * Button content.
   */
  children: ReactNode;
  /**
   * Button margin. Default is 0.
   */
  margin?: string | number;
  /**
   * Button color. Default is default.
   */
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  /**
   * Button disabled.
   */
  disabled?: boolean;
  /**
   * OnClick.
   */
  onClick: (event: MouseEvent<HTMLElement>) => void;
  /**
   * Document.
   */
  document?: Document;
}
