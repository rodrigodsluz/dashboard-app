import React, { useContext, useState } from 'react';

import {
  CardHeader,
  CardBody,
  Typography,
  Spacing,
  Modal,
  OutlineButton,
} from 'd1-components';
import { Alert, AlertTitle } from '@material-ui/lab';

import { Theme, withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { HomeDataContext } from '../../context/HomeDataContext';

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
} from './styled';

import HomeTable from './components/HomeTable';
import StoppedMovementsTable from './components/StoppedMovementsTable';
import Graphic from './components/PieChart';
/**
 * @export
 * @component
 * @name HomeScreen
 *
 * @description
 * Responsável por montar a tela de escolha rcs ou mensagens
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
  const { homeData } = useContext(HomeDataContext);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState({
    btnStatus: '',
    searchBarData: '',
  });

  console.table(homeData);
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
          <TopMenu>
            <Typography htmlTag="strong" fontSize="32px">
              Conference
            </Typography>

            <SearchBar
              name="searchBarData"
              value={filter.searchBarData}
              type="search"
              placeholder="O que você está procurando?"
              onChange={handleSearchBarChange}
            />
          </TopMenu>
          <Spacing vertical="10px" />
          {/* {homeData ? <HomeTable data={homeData} filter={filter} /> : null} */}

          <CardContainer>
            <PanelCard>
              <Card onClick={handleClick('FINISHED')} status="finalizados">
                <CardHeader>
                  <CardStatus>Finalizados</CardStatus>
                </CardHeader>
                <CardBody>
                  {/* <h2>{homeData.btnNotification[2]}</h2> */}
                </CardBody>
              </Card>
            </PanelCard>
            <PanelCard>
              <Card onClick={handleClick('RUNNING')} status="executando">
                <CardHeader>
                  <CardStatus>Executando</CardStatus>
                </CardHeader>
                <CardBody>
                  {/* <h2>{homeData.btnNotification[1]}</h2> */}
                </CardBody>
              </Card>
            </PanelCard>
            <PanelCard>
              <Card onClick={handleClick('ERROR')} status="erros">
                <CardHeader>
                  <CardStatus>Erros</CardStatus>
                </CardHeader>
                <CardBody>
                  {/* <h2>{homeData.btnNotification[0]}</h2> */}
                </CardBody>
              </Card>
            </PanelCard>
          </CardContainer>
          <Alert severity="warning">
            <AlertTitle>Atenção</AlertTitle>
            Existe(m){' '}
            <strong>{homeData.stoppedAmount} processos executando</strong>{' '}
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
                {/* <StoppedMovementsTable data={homeData} /> */}
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

        <GraphicContainer>
          <GraphicWrapper>
            <Typography htmlTag="strong" fontSize="16px">
              {' '}
              SLA em atraso
            </Typography>
            {/* <Graphic data={homeData.graphic} /> */}
          </GraphicWrapper>
        </GraphicContainer>
      </TableContainer>
    </Container>
  );
};
