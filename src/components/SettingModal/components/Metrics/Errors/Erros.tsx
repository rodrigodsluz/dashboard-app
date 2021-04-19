import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Modal } from '@material-ui/core';
import { Spacing } from '@d1.cx/components';
import { ArrowLeft } from '@d1.cx/icons';
import { HomeDataContext } from '@src/context/HomeDataContext';
import { ModalContainer, CenterModal, Row, BackButtuon } from './styled';
import PieGraph from '@src/components/PieGraph/PieGraph';
import SimpleTable from '../../Table/Table';
import services from '@src/services';
import { Content, SearchBar } from '@src/screens/Worker/styled';
import { Menu } from '@src/components/TopMenu/TopMenu';

export const ErrosModal = ({ open }): JSX.Element => {
  const { configureCloseErrorsModal, startDate, endDate } = useContext(
    HomeDataContext
  );
  const [loading, setLoading] = useState(false);

  const handleOpenErroModal = () => {
    configureCloseErrorsModal();
  };

  const getData = useCallback(async (start: string, end: string) => {
    console.log('aquix');
    let res = await services.error.getErros(start, end);
    console.log(res);
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
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={() => {}}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <CenterModal>
        <ModalContainer>
          <BackButtuon onClick={handleOpenErroModal}>
            <ArrowLeft width="45px" color="#000" />
          </BackButtuon>
          <Content>
            <Menu title="Conference" loading={loading} submit={handleSubmit} />
          </Content>
          <Row>
            <PieGraph />
            <SimpleTable />
          </Row>
          <Spacing vertical="10px" />
        </ModalContainer>
      </CenterModal>
    </Modal>
  );
};
