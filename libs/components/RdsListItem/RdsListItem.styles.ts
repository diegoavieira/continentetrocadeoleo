import { createStyles, Theme } from '@material-ui/core';

const RdsListItemStyles = (theme: Theme) =>
  createStyles({
    root: {
      minWidth: '240px'
    },
    icon: {
      minWidth: 0,
      marginRight: theme.spacing(2)
    },
    avatar: {},
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
    expanded: {}
  });

export default RdsListItemStyles;
