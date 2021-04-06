import React from 'react';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import { RowContent, RowCategory, TabPanelContainer, Info } from './style';

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

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '830px',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    alignSelf: 'center',
    '@media (max-width:780px)': {
      width: '40vh',
    },
  },
}));

export default function TabsPanel({ data }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="relative"
        style={{
          background: '#1a1731',
          color: '#fff',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Dados Detalhados" {...a11yProps(0)} />
          <Tab label="Recursos" {...a11yProps(1)} />
          <Tab label="Comentários" {...a11yProps(2)} />
          <Tab label="Erro" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanelContainer>
        <TabPanel value={value} index={0}>
          <RowCategory>
            <Typography>
              TENANT{' '}
              <TooltipArrow
                title="Conjuntos de campos para identificação de um processamento!"
                placement="right"
                arrow
              >
                <Info>!</Info>
              </TooltipArrow>{' '}
            </Typography>

            <RowContent>Tenant: {data.tenant}</RowContent>
            <RowContent>Datamov: {data.datamov}</RowContent>
            <RowContent>Lote: {data.lote}</RowContent>
            <RowContent>Produto: {data.produto}</RowContent>
          </RowCategory>

          <RowCategory>
            <Typography>
              TIMER{' '}
              <TooltipArrow
                title={
                  <div>
                    <p>
                      Processamento: Data e hora que iníciou o processamento.
                    </p>
                    <p>Logger: Data e hora que iníciou o Step.</p>
                    <p>Sla: Limite de horas do processamento.</p>
                    <p>
                      Tempo de processamento: Horas utilizadas nesse
                      processamento
                    </p>
                  </div>
                }
                placement="right"
                arrow
              >
                <Info>!</Info>
              </TooltipArrow>{' '}
            </Typography>
            <RowContent>Processamento: {data.timer_processing}</RowContent>
            <RowContent>Logger: {data.logger_ini}</RowContent>
            <RowContent>Sla: {data.sla}</RowContent>
            <RowContent>Tempo de processamento: {data.run_timer}</RowContent>
          </RowCategory>

          <RowCategory>
            <Typography>
              STATUS{' '}
              <TooltipArrow
                title={
                  <div>
                    <p>
                      Hierarquia: Õmega - Status final do Processo. Beta -
                      status recorrente do Processo. Alfa - status de inicio do
                      Processo.
                    </p>
                    <p>Açao: status do Step.</p>
                    <p>Status: status do Processo.</p>
                  </div>
                }
                placement="right"
                arrow
              >
                <Info>!</Info>
              </TooltipArrow>{' '}
            </Typography>

            <RowContent>Hierarquia: {data.hierarquia}</RowContent>
            <RowContent>Açao: {data.action}</RowContent>
            <RowContent>Status: {data.status}</RowContent>
          </RowCategory>

          <RowCategory>
            <Typography>
              FLUXO{' '}
              <TooltipArrow
                title="Step(s) Já foram concluidos!"
                placement="right"
                arrow
              >
                <Info>!</Info>
              </TooltipArrow>{' '}
            </Typography>

            <RowContent>Fluxo: {data.steps}</RowContent>
          </RowCategory>

          <RowCategory>
            <Typography>
              JOB / TRANSFORMAÇÃO{' '}
              <TooltipArrow
                title="Arquivo: são redes de tarefas lógicas essenciais para a trasformação do fluxo de dados"
                placement="right"
                arrow
              >
                <Info>!</Info>
              </TooltipArrow>{' '}
            </Typography>

            <RowContent>Arquivo: {data.arquivo_job}</RowContent>
          </RowCategory>

          <RowCategory>
            <Typography>
              DETALHES STEPS{' '}
              <TooltipArrow
                title={
                  <div>
                    <p>Anterior: Um step anterior..</p>
                    <p>Atual: O step atual..</p>
                    <p>data inicial: Data e hora do step atual..</p>
                    <p>data final: Data e hora da finalizaçao do step atual.</p>
                    <p>Descrição: Detalhes do step..</p>
                  </div>
                }
                placement="right"
                arrow
              >
                <Info>!</Info>
              </TooltipArrow>
            </Typography>

            <RowContent>Anterior: {data.steps_serie[0].Anterior}</RowContent>
            <RowContent>Atual: {data.steps_serie[0].Seguinte}</RowContent>
            <RowContent>
              data inicial: {data.step_start_end[0].StepStart}
            </RowContent>
            <RowContent>
              data final: {data.step_start_end[0].StepEnd}
            </RowContent>
            <RowContent>Descrição: {data.descricao}</RowContent>
          </RowCategory>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RowContent>Memoria total: {data.memory_total}</RowContent>
          <RowContent>Memoria livre: {data.memory_free}</RowContent>
          <RowContent>Máquina: {data.host}</RowContent>
          <RowContent>IP:{data.ip}</RowContent>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <RowContent>Link: {data.link}</RowContent>
          <RowContent>Comentário: {data.obs}</RowContent>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <RowContent>Erro: {data.log}</RowContent>
        </TabPanel>
      </TabPanelContainer>
    </div>
  );
}
