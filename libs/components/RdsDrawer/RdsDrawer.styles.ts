import { Theme, createStyles } from '@material-ui/core';

const RdsDrawerStyles = (theme: Theme) =>
  createStyles({
    root: {
      width: 280,
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    paper: {
      width: 280
    },
    hasHeaderFixed: {
      top: 56,
      height: 'calc(100% - 56px)'
    },
    mobile: {
      top: 0,
      height: '100%'
    },
    open: {
      width: 280,
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    close: {
      width: 57,
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    }
  });

export default RdsDrawerStyles;
