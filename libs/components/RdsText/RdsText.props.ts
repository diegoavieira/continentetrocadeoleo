import { MouseEvent, ReactNode } from 'react';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import RdsTextStyles from './RdsText.styles';

export default interface RdsTextProps extends WithStyles<typeof RdsTextStyles> {
  /**
   * Text content.
   */
  children: ReactNode;
  /**
   * Text type. Default is p.
   */
  type?: 'p' | 'span' | 'a';
  /**
   * Text weight be 300.
   */
  light?: boolean;
  /**
   * Text margin. Default is 0.
   */
  margin?: string | number;
  /**
   * Text color. Default is initial.
   */
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
  /**
   * Text align. Default is inherit.
   */
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  /**
   * If type a.
   */
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}
