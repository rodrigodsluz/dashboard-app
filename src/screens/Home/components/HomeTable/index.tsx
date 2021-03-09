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
import { useEffect, useState } from 'react';
import TabsPanel from '../TabsPanel';

import { Container } from './style';
import SearchBar from '../SearchBar';

interface Column {
  id: 'tenant' | 'DataMov' | 'Lote' | 'Produto' | 'Timer' | 'Status';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'tenant', label: 'Tenant', minWidth: 170 },
  { id: 'DataMov', label: 'DataMov', minWidth: 100 },
  {
    id: 'Lote',
    label: 'Lote',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'Produto',
    label: 'Produto\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'Timer',
    label: 'Timer',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'Status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
  },
];

interface Data {
  tenant: string;
  DataMov: string;
  Lote: number;
  Produto: number;
  Timer: number;
  Status: string;
}

function createData(
  tenant: string,
  DataMov: string,
  Lote: number,
  Produto: number,
  Timer: number,
  Status: string
): Data {
  return {
    tenant,
    DataMov,
    Lote,
    Produto,
    Timer,
    Status,
  };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    cursor: 'pointer',
  },
  container: {
    height: '55vh',
  },
});

export default function HomeTable({
  data: { processes },
  statusFilter,
  searchBarFilter,
}) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  // const filteredStatusData = processes.filter(
  //   (v) => v.status === filter.status
  // );

  useEffect(() => {
    const results =
      searchBarFilter.isFilter && searchBarFilter.data !== ''
        ? processes.filter(
            (v) =>
              v.tenant === searchBarFilter.data ||
              v.datamov === searchBarFilter.data ||
              v.lote === searchBarFilter.data ||
              v.produto === searchBarFilter.data ||
              v.sla === searchBarFilter.data ||
              v.status === searchBarFilter.data
          )
        : processes.filter((v) => v.status === statusFilter.status);

    setFilteredData(results);
  }, [processes, statusFilter, searchBarFilter]);

  // console.log(searchBarFilter);
  // console.log(statusFilter);
  // console.log(filteredData);
  // console.log(processes);

  // console.log(processes.filter((v) => v.tenant));

  // const filteredData = statusFilter.isFilter
  //   ? processes.filter((v) => v.status === statusFilter.status)
  //   : processes.filter(
  //       (v) =>
  //         v.tenant ||
  //         v.datamov ||
  //         v.lote ||
  //         v.produto ||
  //         v.sla ||
  //         v.status === searchBarFilter.data
  //     );
  const createTableData = (data) => {
    return data.map((d) =>
      createData(d.tenant, d.datamov, d.lote, d.produto, d.sla, d.status)
    );
  };

  const rows =
    statusFilter.isFilter || searchBarFilter.isFilter
      ? createTableData(filteredData)
      : createTableData(processes);

  const modalTitle = rows.map((v) => v.tenant);

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
            {rows != '' ? (
              rows
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
                ))
            ) : (
              <div>Busca não encontrada</div>
            )}
            <Modal open={open} title={modalTitle[index]}>
              <Container>
                <TabsPanel data={processes[index]} />
                <OutlineButton
                  secondary
                  handleClick={() => {}}
                  onClick={() => setOpen(false)}
                >
                  Fechar
                </OutlineButton>
              </Container>
            </Modal>
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
