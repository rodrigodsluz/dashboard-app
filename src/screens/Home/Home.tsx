import React, { useContext, useState } from 'react';

import { CardHeader, CardBody, Typography, Spacing } from 'd1-components';
import { Alert, AlertTitle } from '@material-ui/lab';

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
} from './styled';

import HomeTable from './components/HomeTable';
import Graphic from './components/PieChart';
import { set } from 'js-cookie';

/**
 * @export
 * @component
 * @name HomeScreen
 *
 * @description
 * Responsável por montar a tela de escolha rcs ou mensagens
 */
export const HomeScreen = (): JSX.Element => {
  const { homeData } = useContext(HomeDataContext);

  const [filterStatus, setFilterStatus] = useState({
    isFilter: false,
    status: '',
  });

  const processStatus = (status: string) => {
    return status === 'STOPPED_MOVEMENTS'
      ? homeData.stoppedAmount
      : homeData.processes.filter((v) => v.status === status).length;
  };

  const handleClick = param => () => {
    setFilterStatus({
      isFilter: true,
      status: param,
    })
  };

  return (
    <Container>
      <Sidebar />

      <TableContainer>
        <TableContent>
          <Typography htmlTag="strong" fontSize="32px">
            Conference
          </Typography>
          <Spacing vertical="10px" />

          <HomeTable data={homeData} filter={filterStatus} />

          <CardContainer>
            <PanelCard>
              <Card onClick={handleClick('FINISHED')} status="finalizados">
                <CardHeader>
                  <CardStatus>Finalizados</CardStatus>
                </CardHeader>
                <CardBody>
                  <h2>{processStatus('FINISHED')}</h2>
                </CardBody>
              </Card>
            </PanelCard>
            <PanelCard>
              <Card onClick={handleClick('RUNNING')} status="executando">
                <CardHeader>
                  <CardStatus>Executando</CardStatus>
                </CardHeader>
                <CardBody>
                  <h2>{processStatus('RUNNING')}</h2>
                </CardBody>
              </Card>
            </PanelCard>
            <PanelCard>
              <Card onClick={handleClick('ERROR')} status="erros">
                <CardHeader>
                  <CardStatus>Erros</CardStatus>
                </CardHeader>
                <CardBody>
                  <h2>{processStatus('ERROR')}</h2>
                </CardBody>
              </Card>
            </PanelCard>
          </CardContainer>

          <Alert severity="warning">
            <AlertTitle>Atenção</AlertTitle>
            Existem{' '}
            <strong>
              {processStatus('STOPPED_MOVEMENTS')} processos executando
            </strong>{' '}
            a mais de 24 horas.
          </Alert>
        </TableContent>

        <GraphicContainer>
          <GraphicWrapper>
            <Typography htmlTag="strong" fontSize="16px">
              {' '}
              SLA em atraso
            </Typography>
            <Graphic data={homeData.graphic} />
          </GraphicWrapper>
        </GraphicContainer>
      </TableContainer>
    </Container>
  );
};
