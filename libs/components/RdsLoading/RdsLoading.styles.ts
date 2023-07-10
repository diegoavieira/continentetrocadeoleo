import { alpha, createStyles, Theme } from '@material-ui/core';

const RdsLoadingStyles = (theme: Theme) =>
  createStyles({
    root: {
      zIndex: theme.zIndex.drawer,
      position: 'absolute',
      height: 'calc(100vh - 56px)',
      backgroundColor: alpha(
        theme.palette.type === 'light' ? theme.palette.common.white : theme.palette.common.black,
        0.7
      )
    },
    notHasHeader: {
      height: '100vh'
    }
  });

export default RdsLoadingStyles;
