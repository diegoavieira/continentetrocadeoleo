import { createStyles, Theme } from '@material-ui/core';

const MarkedStyles = (theme: Theme) =>
  createStyles({
    root: {},
    element: {
      '& h1': Object.assign({}, theme.typography.h3, {
        fontSize: 40,
        display: 'flex',
        justifyContent: 'space-between',
        flexFlow: 'row wrap',
        margin: '16px 0 32px'
      }),
      '& h2': Object.assign({}, theme.typography.h4, { fontSize: 30, margin: '32px 0 16px' }),
      '& h3': Object.assign({}, theme.typography.h5, { margin: '32px 0 16px' }),
      '& h4': Object.assign({}, theme.typography.h6, { margin: '32px 0 16px' }),
      '& h5': Object.assign({}, theme.typography.subtitle2, { margin: '32px 0 16px' }),
      '& p, & ul, & ol': Object.assign({}, theme.typography.body1, { margin: '0 0 16px' }),
      '& ul': {
        paddingLeft: 30
      },
      '& pre': {
        width: '100%',
        display: 'table',
        tableLayout: 'fixed',
        '& code.hljs': {
          padding: theme.spacing(2),
          borderRadius: theme.shape.borderRadius
        }
      },
      '& a': {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline'
        }
      },
      '& b, strong': {
        fontWeight: 500
      }
    }
  });

export default MarkedStyles;
