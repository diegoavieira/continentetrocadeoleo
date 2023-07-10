import { WithStyles } from '@material-ui/core';
import RdsContainerStyles from './RdsContainer.styles';

export default interface RdsContainerProps extends WithStyles<typeof RdsContainerStyles> {
  /**
   * Children.
   */
  children: JSX.Element | JSX.Element[];
  /**
   * Padding will `0`.
   */
  disableGutters?: boolean;
  /**
   * Max width. Default is 'md'.
   */
  maxWidth?: 'lg' | 'md' | 'sm' | 'xl' | 'xs' | false;
}
