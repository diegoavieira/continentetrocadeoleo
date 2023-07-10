import { createStyles } from '@material-ui/core';

const RdsMainStyles = () =>
  createStyles({
    root: {
      flexGrow: 1,
      position: 'relative'
    },
    fixed: {
      height: 'calc(100vh - 56px)'
    }
  });

export default RdsMainStyles;
