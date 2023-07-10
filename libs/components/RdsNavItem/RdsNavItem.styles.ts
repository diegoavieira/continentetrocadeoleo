import { alpha, createStyles, Theme } from '@material-ui/core';

const RdsNavItemStyles = (theme: Theme) =>
  createStyles({
    root: {
      minWidth: '240px',
      '&$active, &$active:hover': {
        color: theme.palette.primary.main
      },
      '&.has-icon': {
        zIndex: theme.zIndex.modal,
        paddingLeft: theme.spacing(7),
        paddingRight: theme.spacing(2)
      },
      '&.collapse-1': {
        paddingLeft: theme.spacing(7)
      }
    },
    icon: {
      left: 0,
      paddingLeft: theme.spacing(2),
      width: theme.spacing(7)
    },
    iconButton: {
      zIndex: theme.zIndex.modal + 1
    },
    iconActived: {
      color: alpha(theme.palette.primary.main, 0.64)
    },
    text: {},
    active: {},
    expandIcon: {
      padding: 0,
      '&:hover': {
        backgroundColor: 'transparent'
      },
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      }),
      '&$expanded': {
        transform: 'rotate(180deg)'
      }
    },
    expandIconActived: {
      color: alpha(theme.palette.primary.main, 0.64)
    },
    expanded: {}
  });

export default RdsNavItemStyles;
