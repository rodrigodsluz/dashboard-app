import React, { useCallback, useContext, useEffect, useState } from 'react';

import {
  Typography,
  Spacing,
  Modal,
  OutlineButton,
  MenuFilterLoading,
} from '@d1.cx/components';
import { Alert, AlertTitle } from '@material-ui/lab';

import { Theme, withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Sidebar from '../../components/Sidebar';
import HomeTable from './components/HomeTable';
import StoppedMovementsTable from './components/StoppedMovementsTable';
import Graphic from './components/PieChart';
import { Menu } from './components/TopMenu/TopMenu';
import { HomeDataContext } from '@src/context/HomeDataContext';
import { CardContent } from './components/Cards/Card';

import Services from '../../services';

import {
  Container,
  TableContainer,
  GraphicContainer,
  TableContent,
  GraphicWrapper,
  Content,
  Info,
  InfoBtn,
  ModalContainer,
  SearchBar,
} from './styled';
import { AlertContent } from './components/Alert/Alert';
/**
 * @export
 * @component
 * @name HomeScreen
 *
 * @description
 * Responsável por montar a tela de Home. Exibindo a tabela com os processos, gráfico dos mesmos e filtro por status.
 */

const TooltipArrow = withStyles((theme: Theme) => ({
  arrow: {
    color: 'white',
  },
  tooltip: {
    backgroundColor: 'white',
    color: '#3E4157',
    fontWeight: 'bold',
    boxShadow: theme.shadows[1],
    padding: theme.spacing(1),
    fontSize: '14px',
  },
}))(Tooltip);

export const HomeScreen = (): JSX.Element => {
  const { startDate, endDate } = useContext(HomeDataContext);
  const [homeData, setHomeData] = useState({
    processes: [],
    graphic: [],
    stoppedAmount: 0,
    stoppedMovements: [],
    btnNotification: [],
  });
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState({
    btnStatus: '',
    searchBarData: '',
  });

  const [loading, setLoading] = useState(false);
  const getData = useCallback(async (start: string, end: string) => {
    try {
      let processes = await Services.home.getProcesses(start, end);
      let graphic = await Services.home.getGraphicData(start, end);
      let amount = await Services.home.getStoppedMovementsAmount(start, end);
      let movements = await Services.home.getStoppedMovements(start, end);
      let notifications = await Services.home.getBtnNotification(start, end);

      setHomeData({
        processes,
        graphic,
        stoppedAmount: amount,
        stoppedMovements: movements,
        btnNotification: notifications,
      });

      setLoading(false);
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = useCallback(async () => {
    setLoading(true);
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    let day = handleFormatDate(dd);
    let month = handleFormatDate(mm);

    let currentDate = `${yyyy.toString()}-${month}-${day}`;
    if (endDate.length > 0) {
      if (startDate.length == 0) {
        alert('Por favor, selecione uma data de inicio para continuar');
        setLoading(false);
      } else {
        getData(startDate, endDate);
      }
    } else {
      getData(currentDate, currentDate);
    }
  }, [startDate, endDate]);

  const handleFormatDate = (date: number) => {
    let formatDate = date < 10 ? '0' + date : date;
    return formatDate.toString();
  };

  const handleClick = (status) => () => {
    setFilter({
      btnStatus: status,
      searchBarData: '',
    });
  };

  const handleSearchBarChange = (e) => {
    setFilter({
      searchBarData: e.target.value.toLowerCase(),
      btnStatus: '',
    });
  };

  return (
    <Container>
      <Sidebar />

      <TableContainer>
        <TableContent>
          <Content>
            <Menu loading={loading} submit={handleSubmit} />
            <SearchBar
              name="searchBarData"
              value={filter.searchBarData}
              type="search"
              placeholder="O que você está procurando?"
              onChange={handleSearchBarChange}
            />
          </Content>
          <Spacing vertical="10px" />
          {homeData.processes.length > 0 ? (
            <HomeTable data={homeData} filter={filter} />
          ) : (
            <MenuFilterLoading />
          )}
          <CardContent
            setStatus={handleClick}
            data={homeData.btnNotification}
          />
          <AlertContent data={homeData.stoppedAmount} homeData={homeData} />
        </TableContent>

        {homeData.graphic && (
          <GraphicContainer>
            <GraphicWrapper>
              <Spacing vertical="5px" />
              <Typography htmlTag="strong" fontSize="16px">
                {' '}
                SLA em atraso
              </Typography>
              <Graphic data={homeData.graphic} />
            </GraphicWrapper>
          </GraphicContainer>
        )}
      </TableContainer>
    </Container>
  );
};
