import { Typography, Spacing } from 'd1-components';
import React from 'react';
import {
  Container,
  TableContainer,
  TableContent,
  ChartContainer,
  JobsContainer,
  Card,
  WorkerContainer,
  CardText,
  Info,
} from './style';
import StickyHeadTable from '../../components/WorkerTable/index';
import Sidebar from '../../components/Sidebar';
import Chart from '../../components/SimpleLineChart';
import useWindowDimensions from '../../hooks/useWindowDimensions';

/**
 * @export
 * @component
 * @name Sending
 *
 * @description
 * Página sending com tabela
 */

export default function Worker() {
  const { height, width } = useWindowDimensions();

  // console.log(width);
  return (
    <Container>
      {/* {width > 500 ? <Sidebar /> : null} */}
      <Sidebar />

      <WorkerContainer>
        <TableContainer>
          <TableContent>
            <Spacing vertical="0px" />
            <StickyHeadTable />
          </TableContent>
        </TableContainer>
        <JobsContainer>
          <Card>
            <Info>
              <h3>
                Jobs - ( aguardando ) 6 Jobs - ( executando ) 1303 Jobs - (
                finalizado ) 1 Jobs - ( falhou ) 0 Jobs - ( abortado )
              </h3>
            </Info>

            <Info>
              <CardText>SOMPO HDI MITSUI</CardText>
            </Info>

            <Info>
              <CardText>20</CardText>
            </Info>
          </Card>

          <Card>
            <CardText>106,266</CardText>
            <CardText>Quantidade ( documentos )</CardText>
            <CardText>6</CardText>
          </Card>
        </JobsContainer>

        <ChartContainer>
          <Chart size={width} />
        </ChartContainer>
      </WorkerContainer>
    </Container>
  );
}

// const getInitialProps = async ctx => ({});
