import React, { FC } from 'react';
import {
  withStyles,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  createStyles,
  Theme
} from '@material-ui/core';
import RdsTableProps from './RdsTable.props';
import RdsTableStyles from './RdsTable.styles';
import clsx from 'clsx';

const TableCellStyled = withStyles((theme: Theme) =>
  createStyles({
    root: Object.assign({}, theme.typography.body1, {
      padding: '11.5px 16px',
      whiteSpace: 'nowrap'
    }),
    head: {
      fontWeight: 500,
      backgroundColor: theme.palette.background.paper
    },
    body: {}
  })
)(TableCell);

/**
 * [RdsTable Examples](https://diegoavieira.github.io/rdsystem/components/rds-table)
 */
const RdsTable: FC<RdsTableProps> = ({ classes, height = 'auto', columns }) => {
  console.log(columns);
  return (
    <div className={classes.root} data-testid="rds-table">
      <TableContainer className={clsx(classes.container, 'rds-scrollbar')} style={{ height }}>
        <Table stickyHeader className={classes.table}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCellStyled key={column.key}>{column.title}</TableCellStyled>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCellStyled>Test</TableCellStyled>
              <TableCellStyled>Test</TableCellStyled>
              <TableCellStyled>Test</TableCellStyled>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default withStyles(RdsTableStyles, { name: 'RdsTable' })(RdsTable);
