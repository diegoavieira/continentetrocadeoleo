import { createStyles, Theme } from '@material-ui/core';

const SandboxStyles = (theme: Theme) =>
  createStyles({
    root: {
      marginBottom: 16
    },
    demo: {
      display: 'flex'
    },
    bg: {
      background: theme.palette.background.default
    },
    toolbar: {
      padding: 0,
      justifyContent: 'flex-end'
    },
    code: {
      '& pre': {
        margin: 0
      },
      maxHeight: '500px',
      overflow: 'auto'
    }
  });

export default SandboxStyles;
