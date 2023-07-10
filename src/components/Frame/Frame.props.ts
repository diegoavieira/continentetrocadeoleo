import { WithStyles } from '@material-ui/core';
import FrameStyles from './Frame.styles';

export default interface FrameProps extends WithStyles<typeof FrameStyles> {
  children?: JSX.Element | JSX.Element[];
}
