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

import { HomeDataContext } from '../../context/HomeDataContext';

import Sidebar from '../../components/Sidebar';
import { Theme, withStyles } from '@material-ui/core/styles';
import TabsPanel from './components/TabsPanel';

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
} from './styled';

import HomeTable from './components/HomeTable';
import Graphic from './components/PieChart';
import Tooltip from '@material-ui/core/Tooltip';

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

  const [filterStatus, setFilterStatus] = useState({
    isFilter: false,
    status: '',
  });

  ////////////////////////
  const processesStatus = homeData.processes.map((v) => v.status);
  console.log(processesStatus);

  const processStatus = (status: string) => {
    return status === 'STOPPED_MOVEMENTS'
      ? homeData.stoppedAmount
      : processesStatus.filter((st) => st === status).length;
  };
  ////////////////////////////////////////////////////////////////

  const handleClick = (param) => () => {
    setFilterStatus({
      isFilter: true,
      status: param,
    });
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
            Existe(m){' '}
            <strong>
              {processStatus('STOPPED_MOVEMENTS')} processos executando
            </strong>{' '}
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
            <Modal open={open} title="eae">
              <ModalContainer>
                <TabsPanel />
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
            <Graphic data={homeData.graphic} />
          </GraphicWrapper>
        </GraphicContainer>
      </TableContainer>
    </Container>
  );
};
