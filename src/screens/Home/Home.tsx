import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  Typography,
  Spacing,
  MenuFilterLoading,
  Notification,
} from '@d1.cx/components';
import { AlertContent } from './components/Alert/Alert';
import { HomeDataContext } from '@src/context/HomeDataContext';

import Sidebar from '../../components/Sidebar';
import HomeTable from './components/HomeTable';
import Services from '../../services';

import {
  Container,
  TableContainer,
  TableContent,
  GraphicWrapper,
  Content,
  SearchBar,
  Wrapper,
} from './styled';
import { Menu } from '@src/components/TopMenu/TopMenu';
import { CardContent } from './components/Cards/Card';
import { redirect } from '@src/utils/redirect';
import { routes } from '@src/routes';
import Graphic from './components/PieChart';

/**
 * @export
 * @component
 * @name HomeScreen
 *
 * @description
 * Responsável por montar a tela de Home. Exibindo a tabela com os processos,
 * gráfico dos mesmos e filtro por status.
 */

export const HomeScreen = (): JSX.Element => {
  const { startDate, endDate } = useContext(HomeDataContext);
  const [loading, setLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    finished: false,
    running: false,
    error: false,
  });
  const [homeData, setHomeData] = useState({
    processes: [],
    graphic: [],
    stoppedAmount: 0,
    stoppedMovements: [],
    btnNotification: [],
  });
  const [filter, setFilter] = useState({
    btnStatus: '',
    searchBarData: '',
  });
  /**
   * @function
   * @name getData
   *
   * @description
   * Responsavel por fazer a requisição na api
   */

  const getData = useCallback(async (start: string, end: string) => {
    try {
      let processes = await Services.home.getProcesses(start, end);
      let graphic = await Services.home.getGraphicData(start, end);
      let amount = await Services.home.getStoppedMovementsAmount(start, end);
      let movements = await Services.home.getStoppedMovements(start, end);
      let notifications = await Services.home.getBtnNotification(start, end);
      setHomeData({
        processes,
        graphic: graphic,
        stoppedAmount: amount,
        stoppedMovements: movements,
        btnNotification: notifications,
      });
      if (!processes && !graphic) {
        redirect(routes.login);
        return;
      }
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    handleSubmit();
  }, []);

  /**
   * @function
   * @name handleSubmit
   *
   * @description
   * Responsavel por pegar a data do dia atual e fazer a request.
   * Caso exista a data selecionada nos datepicker, ela que é utilizada
   */

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
        alert('Ops! É necessário selecionar uma data de ínicio para filtrar');
        setLoading(false);
      } else {
        getData(startDate, endDate);
      }
    } else {
      getData(currentDate, currentDate);
    }
  }, [startDate, endDate]);

  /**
   * @function
   * @name handleFormatDate
   *
   * @description
   * Responsavel por formatar a data atual caso seja menor que o dia ou mês 10, adicionando um 0 antes
   */

  const handleFormatDate = (date: number) => {
    let formatDate = date < 10 ? '0' + date : date;
    return formatDate.toString();
  };

  /**
   * @function
   * @name handleClick
   *
   * @description
   * Responsavel por setar o state do filtro de busca
   */

  const handleClick = (status: string, selected?: boolean) => () => {
    if (selected) {
      setFilter({
        btnStatus: status,
        searchBarData: '',
      });
    } else {
      setFilter({
        btnStatus: '',
        searchBarData: '',
      });
    }
    switch (status) {
      case 'FINISHED':
        setSelectedCard({
          finished: !selectedCard.finished,
          running: false,
          error: false,
        });

        break;
      case 'RUNNING':
        setSelectedCard({
          finished: false,
          running: !selectedCard.running,
          error: false,
        });
        break;
      case 'ERROR':
        setSelectedCard({
          finished: false,
          running: false,
          error: !selectedCard.error,
        });
        break;

      default:
        break;
    }
  };

  /**
   * @function
   * @name handleSearchBarChange
   *
   * @description
   * Responsavel por pegar o valor digitado na barra de busca
   */

  const handleSearchBarChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter({
      searchBarData: e.target.value.toLowerCase(),
      btnStatus: '',
    });
  };

  return (
    <Container>
      <Sidebar />

      <Wrapper>
        <Content>
          <Menu title="Conference" loading={loading} submit={handleSubmit} />
          <SearchBar
            name="searchBarData"
            value={filter.searchBarData}
            type="search"
            placeholder="O que você está procurando?"
            onChange={handleSearchBarChange}
          />
        </Content>
        <TableContainer>
          <TableContent>
            <Spacing vertical="10px" />
            {homeData.processes.length > 0 ? (
              <HomeTable data={homeData} filter={filter} />
            ) : (
              <MenuFilterLoading />
            )}
            <CardContent
              selected={selectedCard}
              setStatus={handleClick}
              data={homeData.btnNotification}
            />
            <AlertContent data={homeData.stoppedAmount} homeData={homeData} />
          </TableContent>
          <GraphicWrapper>
            <Spacing vertical="5px" />
            <Typography htmlTag="strong" fontSize="16px">
              {' '}
              SLA em atraso
            </Typography>
            {homeData.graphic.length > 0 ? (
              <Graphic data={homeData.graphic} />
            ) : null}
          </GraphicWrapper>
        </TableContainer>
      </Wrapper>
    </Container>
  );
};
