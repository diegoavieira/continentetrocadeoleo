import { WithStyles } from '@material-ui/styles';
import SandboxStyles from './Sandbox.styles';

export default interface SandboxProps extends WithStyles<typeof SandboxStyles> {
  demo?: JSX.Element;
  code: JSX.Element;
  bg?: boolean;
  frame?: boolean;
}
