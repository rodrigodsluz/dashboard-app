import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Modal, OutlineButton } from 'd1-components';

import { Container } from './style';

interface Column {
  id:
    | 'time'
    | 'tenent'
    | 'DataMov'
    | 'Lote'
    | 'EmailSend'
    | 'SmsSend'
    | 'PrintSend'
    | 'WebSend'
    | 'Pending';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'time', label: 'Time', minWidth: 150 },

  { id: 'tenent', label: 'Tenent', minWidth: 150 },
  { id: 'DataMov', label: 'DataMov', minWidth: 100 },
  {
    id: 'Lote',
    label: 'Lote',
    minWidth: 150,
    align: 'right',
    format: (value: number) => value,
  },
  {
    id: 'EmailSend',
    label: 'Email Send',
    minWidth: 150,
    align: 'right',
    format: (value: number) => value,
  },
  {
    id: 'SmsSend',
    label: 'SMS Send',
    minWidth: 150,
    align: 'right',
    format: (value: number) => value,
  },

  {
    id: 'PrintSend',
    label: 'Print Send',
    minWidth: 150,
    align: 'right',
    format: (value: number) => value,
  },
  {
    id: 'WebSend',
    label: 'Web Send',
    minWidth: 150,
    align: 'right',
    format: (value: number) => value,
  },
  {
    id: 'Pending',
    label: 'Pending',
    minWidth: 150,
    align: 'right',
    format: (value: number) => value,
  },
];

interface Data {
  time: string;
  tenent: string;
  DataMov: string;
  Lote: string;
  EmailSend: number;
  SmsSend: number;
  PrintSend: number;
  WebSend: number;
  Pending: number;
}

function createData(
  time: string,
  tenent: string,
  DataMov: string,
  Lote: string,
  EmailSend: number,
  SmsSend: number,
  PrintSend: number,
  WebSend: number,
  Pending: number,
): Data {
  return {
    time,
    tenent,
    DataMov,
    Lote,
    EmailSend,
    SmsSend,
    PrintSend,
    WebSend,
    Pending,
  };
}

const rows = [
  createData(
    '2021-02-01 17:36:16',
    'SOMPOSEGUROS',
    '01022021',
    '00675',
    59,
    0,
    0,
    0,
    59,
  ),
  createData(
    '2021-02-01 17:30:15',
    'SOMPOSEGUROS',
    '1403500365',
    '00674',
    1741,
    0,
    3,
    0,
    1744,
  ),
  createData(
    '2021-02-01 16:40:18',
    'SOMPOSEGUROS',
    '30012021',
    '00672',
    427,
    0,
    65,
    0,
    492,
  ),
  createData(
    '2021-02-01 16:40:17',
    'SOROCRED',
    '01022021',
    '00061',
    0,
    262,
    0,
    0,
    262,
  ),
  createData(
    '2021-02-01 13:30:42',
    'VOXCRED',
    '01022021',
    '02306',
    21780,
    0,
    0,
    5643,
    0,
  ),
  createData(
    '2021-02-01 13:30:32',
    'DB_SUPERMERCADOS',
    '01022021',
    '01519',
    5150,
    5,
    0,
    11739,
    0,
  ),
  createData(
    '2021-02-01 13:30:31',
    'SINDCONVENIOS',
    '01022021',
    '00081',
    378,
    0,
    0,
    311,
    0,
  ),
  createData(
    '2021-02-01 13:30:27',
    'CATTAN',
    '01022021',
    '02020',
    0,
    11714,
    0,
    527,
    0,
  ),
  createData(
    '2021-02-01 13:30:25',
    'ANITA',
    '01022021',
    '01221',
    6291,
    6932,
    0,
    19,
    13242,
  ),
  createData(
    '2021-02-01 13:30:25',
    'CAMPELO',
    '01022021',
    '01722',
    302,
    20,
    0,
    1387,
    0,
  ),
  createData(
    '2021-02-01 13:30:23',
    'SAO_JOAO',
    '01022021',
    '00123',
    15,
    290,
    0,
    3,
    0,
  ),
  createData(
    '2021-02-01 13:30:20',
    'BAHAMAS',
    '01022021',
    '00042',
    8236,
    0,
    0,
    562,
    0,
  ),
  createData(
    '2021-02-01 13:30:19',
    'BANCOBARI',
    '01022021',
    '00102',
    0,
    11,
    0,
    0,
    11,
  ),
  createData(
    '2021-02-01 13:30:16',
    'BANDCARD',
    '01022021',
    '01320',
    619,
    0,
    0,
    852,
    0,
  ),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    height: '70vh',
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    console.log(rows[index]);
  }, [index]);

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
                    onClick={() => {
                      setOpen(true);
                      setIndex(i);
                    }}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.DataMov}
                  >
                    {columns.map(column => {
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
