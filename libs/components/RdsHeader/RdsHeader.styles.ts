import { createStyles, Theme } from '@material-ui/core';

const RdsHeaderStyles = (theme: Theme) =>
  createStyles({
    root: {
      zIndex: theme.zIndex.drawer + 1
    }
  });

export default RdsHeaderStyles;
