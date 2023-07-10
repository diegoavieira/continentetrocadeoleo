/* eslint-disable @typescript-eslint/no-explicit-any */
import { WithStyles } from '@material-ui/core/styles/withStyles';
import MarkedStyles from './Marked.styles';

export default interface MarkedProps extends WithStyles<typeof MarkedStyles> {
  file: string;
  className?: string;
  sandboxes?: { [key: string]: { demo?: any; code: any } };
}
