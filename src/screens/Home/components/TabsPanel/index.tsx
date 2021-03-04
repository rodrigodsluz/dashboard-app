import React from 'react';
import { makeStyles, Theme, withStyles  } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { RowContent, RowCategory, TabPanelContainer, Info } from './style';
import Tooltip from '@material-ui/core/Tooltip';


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
    width: '100%',
    height: '430px',
    backgroundColor: theme.palette.background.paper,
    alignSelf: 'center',
  },
}));

export default function TabsPanel() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="sticky"
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

        <Typography>TENANT <TooltipArrow title="Conjuntos de campos para identificação de um processamento!" placement="right" arrow><Info>!</Info></TooltipArrow> </Typography>

          <RowContent>Tenant: PREVENTSENIOR</RowContent>
          <RowContent>Datamov: 03022021</RowContent>
          <RowContent>Lote: 00348</RowContent>
          <RowContent>Produto: PREVENTSENIOR</RowContent>
        </RowCategory>

        <RowCategory>

        <Typography>TIMER <TooltipArrow title={
        <div>
          <p>Processamento: Data e hora que iníciou o processamento.</p>
          <p>Logger: Data e hora que iníciou o Step.</p>
          <p>Sla: Limite de horas do processamento.</p>
          <p>Tempo de processamento: Horas utilizadas nesse processamento</p>
        </div>}

         placement="right" arrow><Info>!</Info></TooltipArrow> </Typography>
          <RowContent>Processamento: 2021/02/03 10:01:53.554</RowContent>
          <RowContent>Logger: 03/02/2021 11:13:18</RowContent>
          <RowContent>Sla: 6(hh)</RowContent>
          <RowContent>Tempo de processamento: 1(hh)</RowContent>
        </RowCategory>

        <RowCategory>

        <Typography>STATUS <TooltipArrow title={
        <div>
          <p>Hierarquia: Õmega - Status final do Processo. Beta - status recorrente do Processo. Alfa - status de inicio do Processo.</p>
          <p>Açao: status do Step.</p>
          <p>Status: status do Processo.</p>
        </div>}

        placement="right" arrow><Info>!</Info></TooltipArrow> </Typography>

          <RowContent>Hierarquia: OMEGA</RowContent>
          <RowContent>Açao: END</RowContent>
          <RowContent>Status: FINISHED</RowContent>
        </RowCategory>

        <RowCategory>

        <Typography>FLUXO <TooltipArrow title="Step(s) Já foram concluidos!" placement="right" arrow><Info>!</Info></TooltipArrow> </Typography>

          <RowContent>Fluxo: ->ETL -> Update_VUC -> DISPAROS -> EMAIL_BOOT</RowContent>
        </RowCategory>

        <RowCategory>

        <Typography>JOB / TRANSFORMAÇÃO <TooltipArrow title="Arquivo: são redes de tarefas lógicas essenciais para a trasformação do fluxo de dados" placement="right" arrow><Info>!</Info></TooltipArrow> </Typography>

          <RowContent>Arquivo: PREVENTSENIOR_JOB_START_P1.kjb</RowContent>
        </RowCategory>

        <RowCategory>

        <Typography>DETALHES STEPS <TooltipArrow title={
        <div>
          <p>Anterior: Um step anterior..</p>
          <p>Atual: O step atual..</p>
          <p>data inicial: Data e hora do step atual..</p>
          <p>data final: Data e hora da finalizaçao do step atual.</p>
          <p>Descrição: Detalhes do step..</p>
        </div>}

       placement="right" arrow><Info>!</Info></TooltipArrow> </Typography>

          <RowContent>Anterior: DISPAROS</RowContent>
          <RowContent>Atual: EMAIL_BOOT</RowContent>
          <RowContent>data inicial: 03/02/2021 11:13:18</RowContent>
          <RowContent>data final: 03/02/2021 11:13:22</RowContent>
          <RowContent>Descrição: Email de Acompanhamento de Produção</RowContent>
        </RowCategory>


      </TabPanel>
      <TabPanel value={value} index={1}>
      <RowContent>Memoria total: 16.0 GiB -</RowContent>
        <RowContent>Memoria livre: 12.6 GiB</RowContent>
        <RowContent>Máquina: ccm-vm-template</RowContent>
        <RowContent>IP: 172.17.25.67</RowContent>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <RowContent>Link: -</RowContent>
        <RowContent>Comentário: -</RowContent>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <RowContent>-</RowContent>

      </TabPanel>

      </TabPanelContainer>

    </div>
  );
}

