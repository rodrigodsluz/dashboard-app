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
  ContainerStatus,
  StatusCard,
} from './style';
import StickyHeadTable from '../../components/WorkerTable/index';
import Sidebar from '../../components/Sidebar';
import Chart from '../../components/SimpleLineChart';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { StatusCircle } from '../../components/StatusCircle';

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
          <Typography htmlTag="strong" fontSize="32px">
            Worker
          </Typography>
          <Spacing vertical="20px" />
          <TableContent>
            <Spacing vertical="0px" />
            <StickyHeadTable />
          </TableContent>
        </TableContainer>

        <JobsContainer>
          <StatusCard>
            <StatusCircle color="green" status="Executando" number="1" />
          </StatusCard>
          <StatusCard>
            <StatusCircle color="yellow" status="Executando" number="222.222" />
          </StatusCard>
          <StatusCard>
            <StatusCircle color="orange" status="Executando" number="420" />
          </StatusCard>
          <StatusCard>
            <StatusCircle color="#0d3c61" status="Executando" number="4110" />
          </StatusCard>
          <StatusCard>
            <StatusCircle color="red" status="Parados" number="340" />
          </StatusCard>
          <StatusCard>
            <StatusCircle color="black" status="Abortado" number="410" />
          </StatusCard>

          {/* <Card>
            <p>Quantidade de Docs.</p>

            <CardText>106,266</CardText>
            <p>Ativos</p>
            <CardText>6</CardText>
          </Card>  */}
        </JobsContainer>

        <ChartContainer>
          <Chart size={width} />
        </ChartContainer>
      </WorkerContainer>
    </Container>
  );
}

// const getInitialProps = async ctx => ({});
