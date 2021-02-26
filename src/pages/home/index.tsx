import {
  CardHeader, CardBody, Typography, Spacing,
} from 'd1-components';
import { Alert, AlertTitle } from '@material-ui/lab';

import { useContext } from 'react';
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
} from './style';
import StickyHeadTable from '../../components/HomeTable';
import Graphic from '../../components/PieChart';
import Sidebar from '../../components/Sidebar';
import { HomeDataContext } from '../../context/HomeDataContext';

/**
 * @export
 * @component
 * @name Home
 *
 * @description
 * Página do sumário com a tabela principal e o gráfico
 */

const Home = () => {
  const homeData = useContext(HomeDataContext);

  const runningData = () => homeData.filter((v) => (v.status === 'RUNNING')).length;

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
                  <h2>7</h2>
                </CardBody>
              </Card>
            </PanelCard>
            <PanelCard>
              <Card status="executando">
                <CardHeader>
                  <CardStatus>Executando</CardStatus>
                </CardHeader>
                <CardBody>
                  <h2>5</h2>
                </CardBody>
              </Card>
            </PanelCard>
            <PanelCard>
              <Card status="erros">
                <CardHeader>
                  <CardStatus>Erros</CardStatus>
                </CardHeader>
                <CardBody>
                  <h2>2</h2>
                </CardBody>
              </Card>
            </PanelCard>
          </CardContainer>

          <Alert severity="warning">
            <AlertTitle>Atenção</AlertTitle>
            Existem <strong>{runningData()} processos executando</strong> a mais de 24 horas.
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

Home.getInitialProps = async (ctx) => ({});
export default Home;
