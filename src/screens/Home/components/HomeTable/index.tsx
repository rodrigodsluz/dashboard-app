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
import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { HomeDataContext } from '../../../../context/HomeDataContext';
import TabsPanel from '../TabsPanel';

import { Container } from './style';

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
  },
  container: {
    height: '55vh',
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const homeData = useContext(HomeDataContext);

  const rows = homeData.map((d) =>
    createData(d.tenant, d.datamov, d.lote, d.produto, d.sla, d.status)
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

            <Modal open={open} title="eae">
              {' '}
              {/* //rows[index].tenant */}
              <Container>
                <TabsPanel />
                <OutlineButton
                  secondary
                  handleClick={() => {}}
                  onClick={() => setOpen(false)}
                >
                  Fechar
                </OutlineButton>
                {/* <span>Timer: {rows[index].Timer.toFixed(2)}</span>
                <span>Timer: {rows[index].Timer.toFixed(2)}</span>
                <span>Timer: {rows[index].Timer.toFixed(2)}</span> */}
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