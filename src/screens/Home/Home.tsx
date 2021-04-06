import React, { useCallback, useEffect, useState } from 'react';

import {
  CardHeader,
  CardBody,
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

import {
  Container,
  TableContainer,
  CardContainer,
  GraphicContainer,
  TableContent,
  PanelCard,
  Card,
  CardStatus,
  GraphicWrapper,
  Info,
  InfoBtn,
  ModalContainer,
  TopMenu,
  SearchBar,
  DateInput,
  ContainerDate,
} from './styled';

import HomeTable from './components/HomeTable';
import StoppedMovementsTable from './components/StoppedMovementsTable';
import Graphic from './components/PieChart';
import Services from '../../services';
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
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const getData = useCallback(async (start: string, end: string) => {
    try {
      let processes = await Services.home.getProcesses(start, end);
      let graphic = await Services.home.getGraphicData();
      let amount = await Services.home.getStoppedMovementsAmount();
      let movements = await Services.home.getStoppedMovements();
      let notifications = await Services.home.getBtnNotification();

      setHomeData({
        processes,
        graphic,
        stoppedAmount: amount,
        stoppedMovements: movements,
        btnNotification: notifications,
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    console.log('aqui');
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    let day = handleFormatDate(dd);
    let month = handleFormatDate(mm);

    let currentDate = `${yyyy.toString()}-${month}-${day}`;
    console.log(end, start);
    if (end.length > 0) {
      if (start.length == 0) {
        alert('Por favor, selecione uma data de inicio para continuar');
      } else {
        getData(start, end);
      }
    } else {
      getData(currentDate, currentDate);
    }
  }, [end]);

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

  const handleDate = useCallback(
    (selectedDate: string, type: string) => {
      type == 'start' ? setStart(selectedDate) : setEnd(selectedDate);
    },
    [start, end]
  );

  return (
    <Container>
      <Sidebar />

      <TableContainer>
        <TableContent>
          <TopMenu>
            <Typography htmlTag="strong" fontSize="32px">
              Conference
            </Typography>
            <ContainerDate>
              <Typography fontSize="16px">Inicio:</Typography>
              <DateInput
                type="date"
                placeholder="Set the date"
                onChange={({ target }) => {
                  handleDate(target.value, 'start');
                }}
              />

              <Typography fontSize="16px">Fim:</Typography>
              <DateInput
                type="date"
                placeholder="Set the date"
                onChange={({ target }) => {
                  handleDate(target.value, 'end');
                }}
              />
            </ContainerDate>
            <SearchBar
              name="searchBarData"
              value={filter.searchBarData}
              type="search"
              placeholder="O que você está procurando?"
              onChange={handleSearchBarChange}
            />
          </TopMenu>
          <Spacing vertical="10px" />
          {homeData.processes.length > 0 ? (
            <HomeTable data={homeData} filter={filter} />
          ) : (
            <MenuFilterLoading />
          )}

          <CardContainer>
            <PanelCard>
              <Card onClick={handleClick('FINISHED')} status="finalizados">
                <CardHeader>
                  <CardStatus>Finalizados</CardStatus>
                </CardHeader>
                <CardBody>
                  {homeData.btnNotification ? (
                    <h2>{homeData.btnNotification[2]}</h2>
                  ) : null}
                </CardBody>
              </Card>
            </PanelCard>
            <PanelCard>
              <Card onClick={handleClick('RUNNING')} status="executando">
                <CardHeader>
                  <CardStatus>Executando</CardStatus>
                </CardHeader>
                <CardBody>
                  {homeData.btnNotification ? (
                    <h2>{homeData.btnNotification[1]}</h2>
                  ) : null}
                </CardBody>
              </Card>
            </PanelCard>
            <PanelCard>
              <Card onClick={handleClick('ERROR')} status="erros">
                <CardHeader>
                  <CardStatus>Erros</CardStatus>
                </CardHeader>
                <CardBody>
                  {homeData.btnNotification ? (
                    <h2>{homeData.btnNotification[0]}</h2>
                  ) : null}
                </CardBody>
              </Card>
            </PanelCard>
          </CardContainer>
          <Alert severity="warning">
            <AlertTitle>Atenção</AlertTitle>
            Existe(m){' '}
            {homeData.stoppedAmount ? (
              <strong>{homeData.stoppedAmount} processos executando</strong>
            ) : (
              '_'
            )}
            processamento(s) com mais de 24hs.{' '}
            <InfoBtn onClick={() => setOpen(!open)}>
              <TooltipArrow
                title="Clique para ver os processos!"
                placement="right"
                arrow
              >
                <Info>!</Info>
              </TooltipArrow>
            </InfoBtn>
            <Modal open={open} title="Relatório para conferência">
              <Typography htmlTag="p" fontSize="13px">
                Segue abaixo informações do(s) movimento(s) que precisam da sua
                atenção!
              </Typography>

              <Typography htmlTag="p" fontSize="13px">
                Caso esses movimentos já estejam finalizados, por favor executar
                o comando de conclusão!
              </Typography>

              <ModalContainer>
                <StoppedMovementsTable data={homeData} />
                <OutlineButton
                  secondary
                  handleClick={() => {}}
                  onClick={() => setOpen(false)}
                >
                  Fechar
                </OutlineButton>
              </ModalContainer>
            </Modal>
          </Alert>
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
