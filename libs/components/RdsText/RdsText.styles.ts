import { createStyles } from '@material-ui/core';

const RdsTextStyles = () =>
  createStyles({
    root: {},
    light: {
      fontWeight: 300
    },
    link: {
      textDecoration: 'none',
      fontSize: 'inherit',
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  });

export default RdsTextStyles;
