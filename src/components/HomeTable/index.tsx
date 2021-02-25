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
import { get } from 'http';
import TabsPanel from '../../components/Tabs';

import { Container } from './style';

import { getHomeData } from '../../services/api';

interface Column {
  id: 'tenent' | 'DataMov' | 'Lote' | 'Produto' | 'Timer';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'tenent', label: 'Tenent', minWidth: 170 },
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
];

interface Data {
  tenent: string;
  DataMov: string;
  Lote: number;
  Produto: number;
  Timer: number;
}

function createData(
  tenent: string,
  DataMov: string,
  Lote: number,
  Produto: number,
): Data {
  const Timer = Lote / Produto;
  return {
    tenent,
    DataMov,
    Lote,
    Produto,
    Timer,
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

  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setHomeData(await getHomeData());
    };

    fetchAPI();
  }, []);

  const rows = homeData.map((d) =>
    createData(d.tenant, d.datamov, d.lote, d.produto));

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  /* useEffect(() => {
    console.log(rows[index]);
  }, [index]); */

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
            <Modal open={open} title={rows[index].tenent}>
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
