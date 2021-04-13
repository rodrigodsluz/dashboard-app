import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

interface Column {
  id:
    | 'time'
    | 'tenant'
    | 'datamov'
    | 'lot'
    | 'status'
    | 'step'
    | 'data_processamento';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'time', label: 'Time', minWidth: 170 },
  { id: 'tenant', label: 'Tenant', minWidth: 100 },
  {
    id: 'datamov',
    label: 'Datamov',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'lot',
    label: 'Lot',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'step',
    label: 'Step',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'data_processamento',
    label: 'Data Processamento',
    minWidth: 170,
    align: 'right',
  },
];

interface Data {
  time: string;
  tenant: string;
  datamov: number;
  lot: number;
  status: string;
  step: string;
  data_processamento: string;
}

function createData(
  time: string,
  tenant: string,
  datamov: number,
  lot: number,
  status: string,
  step: string,
  data_processamento: string
): Data {
  return {
    time,
    tenant,
    datamov,
    lot,
    status,
    step,
    data_processamento,
  };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    height: '44vh',
  },
});

/**
 * @export
 * @component
 * @name StoppedMovementsTable
 *
 * @description
 * Responsavel por retonar a tabela com tabs ao clicar em algum item da tabela na home
 */

export default function StoppedMovementsTable({ data: { stoppedMovements } }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const rows = stoppedMovements.map((d) =>
    createData(
      d.created,
      d.tenant,
      d.datamov,
      d.lote,
      d.status,
      d.step,
      d.timer_processing
    )
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => (
                <>
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.DataMov}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
