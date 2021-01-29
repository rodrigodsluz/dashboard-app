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
} from './style';
import StickyHeadTable from '../../components/Table/index';
import Graphic from '../../components/PieChart';

/**
 * @export
 * @component
 * @name Sumario
 *
 * @description
 * Página do sumário com a tabela principal e o gráfico
 */

export default function Sumario() {
  const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <Container>
      <Menu
        configuration={[
          {
            active: true,
            link: '#',
            redirect: () => {
              console.log(1);
            },
          },
          { active: false, link: '#', redirect: null },

          { active: false, link: '#', redirect: null },
          { active: false, link: '#', redirect: null },
          { active: false, link: '#', redirect: null },
          { active: false, link: '#', redirect: null },
          { active: false, link: '#', redirect: null },
        ]}
        // srcImg="http://admin.dev.d1.cx/images/logotipo-branco.png"
        srcImg="https://github.com/rodrigodsluz/d1-test/raw/master/logotipo.jpeg"
      />
      <TableContainer>
        <TableContent>
          <Typography htmlTag="strong" fontSize="32px">
            Conference
          </Typography>
          <Spacing vertical="20px" />
          <StickyHeadTable />
          <Alert severity="warning">
            <AlertTitle>Atenção</AlertTitle>
            Existem <strong>56 processos executando!</strong> a mais de 24
            horas.
          </Alert>
          <CardContainer>
            <Card>
              <CardHeader>
                <h2>Finalizado(s)</h2>
              </CardHeader>
              <CardBody>
                <h2>2</h2>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h2>Executando</h2>
              </CardHeader>
              <CardBody>
                <h2>2</h2>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h2>Erro(s)</h2>
              </CardHeader>
              <CardBody>
                <h2>2</h2>
              </CardBody>
            </Card>
          </CardContainer>
        </TableContent>
        <GraphicContainer>
          <Graphic />
        </GraphicContainer>
      </TableContainer>
    </Container>
  );
}

// const getInitialProps = async ctx => ({});
