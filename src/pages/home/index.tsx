import {CardHeader, CardBody, Typography, Spacing } from 'd1-components';
import { Alert, AlertTitle } from '@material-ui/lab';
import {
  Container,
  TableContainer,
  CardContainer,
  GraphicContainer,
  TableContent,
  PanelCard,
  Card,
  CardStatus
} from './style';
import StickyHeadTable from '../../components/HomeTable';
import Graphic from '../../components/PieChart';
import Sidebar from '../../components/Sidebar';
import React from 'react';

/**
 * @export
 * @component
 * @name Home
 *
 * @description
 * Página do sumário com a tabela principal e o gráfico
 */

export default function Home() {
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
              <Card>
                <CardHeader>
                  <CardStatus>Executando</CardStatus>
                </CardHeader>
                <CardBody>
                  <h2>2</h2>
                </CardBody>
              </Card>
            </PanelCard>
            <PanelCard>
              <Card>
                <CardHeader>
                  <CardStatus>Erros</CardStatus>
                </CardHeader>
                <CardBody>
                  <h2>2</h2>
                </CardBody>
              </Card>
            </PanelCard>
            <PanelCard>
              <Card>
                <CardHeader>
                  <CardStatus>Finalizados</CardStatus>
                </CardHeader>
                <CardBody>
                  <h2>2</h2>
                </CardBody>
              </Card>
            </PanelCard>
          </CardContainer>

          <Alert severity="warning">
            <AlertTitle>Atenção</AlertTitle>
            Existem <strong>56 processos executando</strong> a mais de 24 horas.
          </Alert>
        </TableContent>
        <GraphicContainer>
          <Graphic />
          <Graphic />
          <Graphic />
        </GraphicContainer>
      </TableContainer>
    </Container>
  );
}

// const getInitialProps = async ctx => ({});
