import { createStyles, Theme } from '@material-ui/core';

const RdsFieldStyles = (theme: Theme) =>
  createStyles({
    root: {},
    optionIcon: {
      minWidth: 0,
      marginRight: theme.spacing(2)
    },
    optionCheckbox: {
      minWidth: 0,
      marginRight: theme.spacing(1)
    }
  });

export default RdsFieldStyles;
