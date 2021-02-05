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
  // const { width } = useWindowDimensions();

  return (
    <Container>
      <Sidebar />

      <WorkerContainer>
        <TableContainer>
          <Typography htmlTag="strong" fontSize="32px">
            Worker
          </Typography>
          <Spacing vertical="3px" />
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
        </JobsContainer>

        <ChartContainer>
          <Chart size={1000} />
        </ChartContainer> 
      </WorkerContainer>
    </Container>
  );
}

// const getInitialProps = async ctx => ({});
