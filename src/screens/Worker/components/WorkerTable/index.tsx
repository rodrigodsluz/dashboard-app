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

interface Column {
  id:
    | 'time'
    | 'tenent'
    | 'DataMov'
    | 'Lote'
    | 'PID'
    | 'register'
    | 'action'
    | 'duration'
    | 'running'
    | 'waiting'
    | 'finishing'
    | 'failed'
    | 'suspended'
    | 'aborted'
    | 'analysis';
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
  },
  {
    id: 'PID',
    label: 'PID',
    minWidth: 150,
    align: 'right',
  },
  {
    id: 'register',
    label: 'Regustri',
    minWidth: 150,
    align: 'right',
  },

  {
    id: 'action',
    label: 'Ação',
    minWidth: 150,
    align: 'right',
  },
  {
    id: 'duration',
    label: 'Web Send',
    minWidth: 150,
    align: 'right',
  },
  {
    id: 'running',
    label: 'Pending',
    minWidth: 150,
    align: 'right',
  },
  {
    id: 'waiting',
    label: 'Pending',
    minWidth: 150,
    align: 'right',
  },
  {
    id: 'finishing',
    label: 'Pending',
    minWidth: 150,
    align: 'right',
  },
  {
    id: 'failed',
    label: 'Pending',
    minWidth: 150,
    align: 'right',
  },
  {
    id: 'suspended',
    label: 'Pending',
    minWidth: 150,
    align: 'right',
  },
  {
    id: 'aborted',
    label: 'Pending',
    minWidth: 150,
    align: 'right',
  },
  {
    id: 'analysis',
    label: 'Pending',
    minWidth: 150,
    align: 'right',
  },
];

interface Data {
  time: string;
  tenent: string;
  DataMov: string;
  Lote: string;
  PID: number;
  register: number;
  action: string;
  duration: string;
  running: number;
  waiting: number;
  finishing: number;
  failed: number;
  suspended: number;
  aborted: number;
  analysis: number;
}

function createData(
  time: string,
  tenent: string,
  DataMov: string,
  Lote: string,
  PID: number,
  register: number,
  action: string,
  duration: string,
  running: number,
  waiting: number,
  finishing: number,
  failed: number,
  suspended: number,
  aborted: number,
  analysis: number
): Data {
  return {
    time,
    tenent,
    DataMov,
    Lote,
    PID,
    register,
    action,
    duration,
    running,
    waiting,
    finishing,
    failed,
    suspended,
    aborted,
    analysis,
  };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    height: '30vh',
  },
});

export default function StickyHeadTable({ data, filter }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [filteredData, setFilteredData] = React.useState([]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    const results =
      filter.searchBarData !== ''
        ? data.filter(
            (v) =>
              v[0].toLowerCase().includes(filter.searchBarData) ||
              v[1].toLowerCase().includes(filter.searchBarData) ||
              v[2].toLowerCase().includes(filter.searchBarData) ||
              v[3].toLowerCase().includes(filter.searchBarData) ||
              v[4].toString().toLowerCase().includes(filter.searchBarData) ||
              v[5].toString().toLowerCase().includes(filter.searchBarData) ||
              v[6].toLowerCase().includes(filter.searchBarData) ||
              v[7].toLowerCase().includes(filter.searchBarData) ||
              v[8].toString().toLowerCase().includes(filter.searchBarData) ||
              v[9].toString().toLowerCase().includes(filter.searchBarData)
          )
        : data.filter((v) => v.status === filter.btnStatus);

    setFilteredData(results);
  }, [data, filter]);

  const createTableData = (data) => {
    return data.map((d) =>
      createData(
        d[0],
        d[1],
        d[2],
        d[3],
        d[4],
        d[5],
        d[6],
        d[7],
        d[8],
        d[9],
        d[10],
        d[11],
        d[12],
        d[13],
        d[14]
      )
    );
  };
  const rows =
    filter.btnStatus !== '' || filter.searchBarData !== ''
      ? createTableData(filteredData)
      : createTableData(data);

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
