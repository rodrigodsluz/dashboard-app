import React, { useCallback, useContext, useEffect, useState } from 'react';
import { MenuFilterLoading } from '@d1.cx/components';

import StickyHeadTable from './components/WorkerTable';
import Sidebar from '../../components/Sidebar';
import { Chart } from './components/SimpleLineChart';
import { StatusCircle } from './components/StatusCircle';
import { HomeDataContext } from '@src/context/HomeDataContext';
import { ConfigurationCard } from './components/ConfigurationCard/ConfigurationCard';

import services from '@src/services';

import {
  Container,
  TableContainer,
  TableContent,
  ChartContainer,
  JobsContainer,
  Content,
  SearchBar,
  StatusCard,
  ContainerGraph,
} from './styled';
import { Menu } from '@src/components/TopMenu/TopMenu';

/**
 * @export
 * @component
 * @name WorkerScreen
 *
 * @description
 * Componente que contem os dados da tela de Worker.
 */

export const WorkerScreen = (): JSX.Element => {
  const { startDate, endDate } = useContext(HomeDataContext);
  const [loading, setLoading] = useState(false);
  const [workerData, setWorkerData] = useState({
    data: [],
    graph: [],
    cards: [],
    jobs: [],
    machines: 0,
  });
  const [filter, setFilter] = useState({
    btnStatus: '',
    searchBarData: '',
  });

  /**
   * @function
   * @name handleSearchBarChange
   *
   * @description
   * Responsavel por pegar o valor digitado na barra de busca
   */

  const handleSearchBarChange = (e) => {
    setFilter({
      searchBarData: e.target.value.toLowerCase(),
      btnStatus: '',
    });
  };

  /**
   * @function
   * @name handleFormatDate
   *
   * @description
   * Responsavel por formatar a data atual caso seja menor que o dia ou mês 10, adicionando um 0 antes
   */

  const handleFormatDate = (date: number) => {
    let formatDate = date < 10 ? '0' + date : date;
    return formatDate.toString();
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  /**
   * @function
   * @name getData
   *
   * @description
   * Responsavel por fazer a requisição na api
   */

  const getData = useCallback(async (start: string, end: string) => {
    try {
      let data = await services.worker.getDataWorker(start, end);
      let generetedJobs = await services.worker.getGeneretedJobs(start, end);
      let lineGraph = await services.worker.getLineGraph();
      let machines = await services.worker.getMachines();
      let jobs = await services.worker.GetJobsRunning(start, end);
      let allJobs = formatArrayJobs(jobs.data);

      setWorkerData({
        data: data.data,
        cards: generetedJobs.data,
        graph: lineGraph.data,
        jobs: allJobs,
        machines: machines.data,
      });

      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, []);

  /**
   * @function
   * @name handleSubmit
   *
   * @description
   * Responsavel por pegar a data do dia atual e fazer a request.
   * Caso exista a data selecionada nos datepicker, ela que é utilizada
   */

  const handleSubmit = useCallback(async () => {
    setLoading(true);
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    let day = handleFormatDate(dd);
    let month = handleFormatDate(mm);

    let currentDate = `${yyyy.toString()}-${month}-${day}`;
    if (endDate.length > 0) {
      if (startDate.length == 0) {
        alert('Por favor, selecione uma data de inicio para continuar');
        setLoading(false);
      } else {
        getData(startDate, endDate);
      }
    } else {
      getData(currentDate, currentDate);
    }
  }, [startDate, endDate]);

  const formatStatus = useCallback(
    (status) => {
      let splitText = status.split(' ')[1];
      return splitText;
    },
    [workerData.cards]
  );

  const formatArrayJobs = (array: Array<string>) => {
    let format = [];
    if (array.length > 0) {
      array.forEach((element) => {
        let newItem = element + ', ';
        format.push(newItem);
      });
    }
    return format;
  };
  return (
    <>
      <Container>
        <Sidebar />

        <TableContainer>
          <TableContent>
            <Content>
              <Menu title="Worker" loading={loading} submit={handleSubmit} />
              <SearchBar
                name="searchBarData"
                value={filter.searchBarData}
                type="search"
                placeholder="O que você está procurando?"
                onChange={handleSearchBarChange}
              />
            </Content>
            {workerData.data.length > 0 ? (
              <StickyHeadTable data={workerData.data} filter={filter} />
            ) : (
              <MenuFilterLoading />
            )}

            <JobsContainer>
              <StatusCard>
                <StatusCircle
                  color="#fbbc05"
                  status="Aguardando"
                  number={
                    workerData.cards && workerData.cards[0]
                      ? formatStatus(workerData.cards[0])
                      : ''
                  }
                />
              </StatusCard>
              <StatusCard>
                <StatusCircle
                  color="#4285f4"
                  status="Finalizado"
                  number={
                    workerData.cards && workerData.cards[2]
                      ? formatStatus(workerData.cards[2])
                      : ''
                  }
                />
              </StatusCard>
              <StatusCard>
                <StatusCircle
                  color="#ea4335"
                  status="Erros"
                  number={
                    workerData.cards && workerData.cards[3]
                      ? formatStatus(workerData.cards[3])
                      : ''
                  }
                />
              </StatusCard>
              <StatusCard>
                <StatusCircle
                  color="#4907D9"
                  status="Suspensos"
                  number={
                    workerData.cards && workerData.cards[4]
                      ? formatStatus(workerData.cards[4])
                      : ''
                  }
                />
              </StatusCard>
              <StatusCard>
                <StatusCircle
                  color="#242540"
                  status="Documentos"
                  number={
                    workerData.cards && workerData.cards[5]
                      ? formatStatus(workerData.cards[5])
                      : ''
                  }
                />
              </StatusCard>
            </JobsContainer>
            {workerData.graph.length > 0 ? (
              <ContainerGraph>
                <ChartContainer>
                  <Chart data={workerData.graph} />
                </ChartContainer>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 210,
                    justifyContent: 'space-between',
                    marginTop: 22,
                  }}
                >
                  <ConfigurationCard
                    jobs={workerData.jobs}
                    status="Jobs Ativos"
                    number={
                      workerData.cards && workerData.cards[6]
                        ? formatStatus(workerData.cards[6])
                        : ''
                    }
                  />
                  <ConfigurationCard
                    status="Maquinas"
                    number={
                      workerData.machines && workerData.machines
                        ? workerData.machines
                        : ''
                    }
                  />
                </div>
              </ContainerGraph>
            ) : null}
          </TableContent>
        </TableContainer>
      </Container>
    </>
  );
};
