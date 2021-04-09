import { Typography, Spacing } from '@d1.cx/components';
import React, { useCallback, useContext, useEffect, useState } from 'react';

import StickyHeadTable from './components/WorkerTable';
import Sidebar from '../../components/Sidebar';
import Chart from './components/SimpleLineChart';
import { StatusCircle } from './components/StatusCircle';
import {
  Container,
  TableContainer,
  TableContent,
  ChartContainer,
  JobsContainer,
  StatusCard,
} from './styled';
import { Menu } from '../Home/components/TopMenu/TopMenu';
import { Content, SearchBar } from '../Home/styled';
import { HomeDataContext } from '@src/context/HomeDataContext';

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
      // let processes = await Services.home.getProcesses(start, end);

      setLoading(false);
    } catch (e) {
      throw new Error(e);
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
            <StickyHeadTable />

            <JobsContainer>
              <StatusCard>
                <StatusCircle color="#34a853" status="Executando" number="1" />
              </StatusCard>

              <StatusCard>
                <StatusCircle
                  color="#fbbc05"
                  status="Aguardando"
                  number="420"
                />
              </StatusCard>
              <StatusCard>
                <StatusCircle
                  color="#4285f4"
                  status="Finalizado"
                  number="4110"
                />
              </StatusCard>
              <StatusCard>
                <StatusCircle color="#ea4335" status="Parados" number="340" />
              </StatusCard>
              <StatusCard>
                <StatusCircle color="darkgrey" status="Abortado" number="410" />
              </StatusCard>
            </JobsContainer>

            <ChartContainer>
              <Chart />
            </ChartContainer>
          </TableContent>
        </TableContainer>
      </Container>
    </>
  );
};
