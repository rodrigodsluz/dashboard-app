import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Spacing,
  Menu,
} from 'd1-components';
import { Alert, AlertTitle } from '@material-ui/lab';
import React from 'react';
import {
  Container,
  TableContainer,
  CardContainer,
  GraphicContainer,
  TableContent,
  PanelCard,
} from './style';
import StickyHeadTable from '../../components/Table/index';
import Graphic from '../../components/PieChart';
import useWindowDimensions from '../../hooks/useWindowDimensions';

/**
 * @export
 * @component
 * @name Sumario
 *
 * @description
 * Página do sumário com a tabela principal e o gráfico
 */

export default function Sumario() {
  const { height, width } = useWindowDimensions();

  console.log(width);
  return (
    <Container>
      {width > 500 ? (
        <Menu
          configuration={[
            {
              active: true,
              link: '#',
              redirect: () => {},
            },
            { active: false, link: '#', redirect: null },

            { active: false, link: '#', redirect: null },
            { active: false, link: '#', redirect: null },
            { active: false, link: '#', redirect: null },
            { active: false, link: '#', redirect: null },
            { active: false, link: '#', redirect: null },
          ]}
          srcImg="https://github.com/rodrigodsluz/d1-test/raw/master/logotipo.jpeg"
        />
      ) : null}

      <TableContainer>
        <TableContent>
          <Typography htmlTag="strong" fontSize="32px">
            Conference
          </Typography>
          <Spacing vertical="20px" />
          <StickyHeadTable />
          <Alert severity="warning">
            <AlertTitle>Atenção</AlertTitle>
            Existem <strong>56 processos executando</strong> a mais de 24 horas.
          </Alert>
        </TableContent>
        <GraphicContainer>
          <Graphic />

          <CardContainer>
            <PanelCard>
              <Card>
                <CardHeader>
                  <h2>Executando</h2>
                </CardHeader>
                <CardBody>
                  <h2>2</h2>
                </CardBody>
              </Card>
            </PanelCard>
            <PanelCard>
              <Card>
                <CardHeader>
                  <h2>Erros</h2>
                </CardHeader>
                <CardBody>
                  <h2>2</h2>
                </CardBody>
              </Card>
            </PanelCard>{' '}
            <PanelCard>
              <Card>
                <CardHeader>
                  <h2>Finalizados</h2>
                </CardHeader>
                <CardBody>
                  <h2>2</h2>
                </CardBody>
              </Card>
            </PanelCard>
          </CardContainer>
        </GraphicContainer>
      </TableContainer>
    </Container>
  );
}

// const getInitialProps = async ctx => ({});
