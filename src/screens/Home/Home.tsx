import React, { useContext } from 'react';

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

import StickyHeadTable from './components/HomeTable';
import Graphic from './components/PieChart';

/**
 * @export
 * @component
 * @name HomeScreen
 *
 * @description
 * Responsável por montar a tela de escolha rcs ou mensagens
 */
export const HomeScreen = (): JSX.Element => {
  const homeData = useContext(HomeDataContext);

  console.log(homeData);

  const processStatus = (status: string) => {
    return status === '24h'
      ? 35
      : homeData.filter((v) => v.status === status).length;
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

          <StickyHeadTable />

          <CardContainer>
            <PanelCard>
              <Card status="finalizados">
                <CardHeader>
                  <CardStatus>Finalizados</CardStatus>
                </CardHeader>
                <CardBody>
                  <h2>{processStatus('FINISHED')}</h2>
                </CardBody>
              </Card>
            </PanelCard>
            <PanelCard>
              <Card status="executando">
                <CardHeader>
                  <CardStatus>Executando</CardStatus>
                </CardHeader>
                <CardBody>
                  <h2>{processStatus('RUNNING')}</h2>
                </CardBody>
              </Card>
            </PanelCard>
            <PanelCard>
              <Card status="erros">
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
            Existem <strong>
              {processStatus('24h')} processos executando
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
            <Graphic />
          </GraphicWrapper>

          <GraphicWrapper>
            <Typography htmlTag="strong" fontSize="16px">
              {' '}
              SLA em atraso
            </Typography>
            <Graphic />
          </GraphicWrapper>

          <GraphicWrapper>
            <Typography htmlTag="strong" fontSize="16px">
              {' '}
              SLA em atraso
            </Typography>
            <Graphic />
          </GraphicWrapper>
        </GraphicContainer>
      </TableContainer>
    </Container>
  );
};
