import { WithStyles } from '@material-ui/core/styles/withStyles';
import RdsImageStyles from './RdsImage.styles';

export default interface RdsImageProps extends WithStyles<typeof RdsImageStyles> {
  /**
   * Image source.
   */
  src: string;
  /**
   * Image width. Default is auto.
   */
  width?: number | string;
  /**
   * Image height. Default is auto.
   */
  height?: number | string;
  /**
   * Image fit. Default is contain.
   */
  fit?: 'contain' | 'cover';
}
