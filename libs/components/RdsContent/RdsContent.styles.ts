import { createStyles } from '@material-ui/core';

const RdsContentStyles = () =>
  createStyles({
    root: {
      minHeight: '100vh',
      height: '100%'
    },
    hasHeaderFixed: {
      paddingTop: '56px'
    },
    hasFooter: {
      paddingTop: '56px'
    },
    hasDrawer: {
      display: 'flex'
    }
  });

export default RdsContentStyles;
