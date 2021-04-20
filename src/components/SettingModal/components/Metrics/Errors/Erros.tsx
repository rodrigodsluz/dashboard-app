import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Modal } from '@material-ui/core';
import { Spacing, Typography } from '@d1.cx/components';
import { ArrowLeft } from '@d1.cx/icons';
import { HomeDataContext } from '@src/context/HomeDataContext';
import { ModalContainer, CenterModal, Row, BackButtuon } from './styled';
import SimpleTable from '../../Table/Table';
import services from '@src/services';
import { Content, SearchBar } from '@src/screens/Worker/styled';
import { Menu } from '@src/components/TopMenu/TopMenu';
import CustomPaginationActionsTable from '../../Table/Table';
import { ErrosGraph } from '@src/components/PieGraph/PieGraph';

export const ErrosModal = ({ open }): JSX.Element => {
  const { configureCloseErrorsModal, startDate, endDate } = useContext(
    HomeDataContext
  );
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [erros, setErros] = useState([]);
  const handleOpenErroModal = () => {
    configureCloseErrorsModal();
  };

  const getData = useCallback(async (start: string, end: string) => {
    let array = [];
    let res = await services.error.getErros(start, end);
    if (res.data) {
      res.data.forEach((element) => {
        let client = handleFormatString(element[0]);
        let quantity = handleFormatString(element[2]);
        array.push([client, quantity, element[1]]);
      });
      setData(array);
      handleConfigureGraph(array);
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
    setLoading(false);
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

  const handleFormatString = useCallback((value: string) => {
    if (value) {
      return value?.split(': ')[1];
    }
  }, []);

  const handleConfigureGraph = useCallback(
    (data) => {
      let listErrors = [];
      if (data) {
        data.forEach((element) => {
          element[2].forEach((errors) => {
            listErrors.push(errors);
          });
        });
      }
      handleSetData(listErrors);
    },
    [data]
  );

  const handleSetData = useCallback(
    (erros) => {
      let errorsArray = [];
      let filtered = [];
      erros.forEach((element) => {
        let filtered = errorsArray.includes(element);

        if (!filtered) {
          errorsArray.push(element);
        }
      });
      // console.table(erros, errorsArray);

      errorsArray.forEach((element) => {
        let quant = erros.filter((elem) => elem === element).length;
        filtered.push([element, quant]);
      });
      setErros(filtered);
      // console.log(filtered);
    },
    [data]
  );

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
            <Typography fontSize="16px">Voltar</Typography>
          </BackButtuon>
          <Content>
            <Menu title="" loading={loading} submit={handleSubmit} />
          </Content>
          <Row>
            {data.length > 0 ? <ErrosGraph data={erros} /> : null}
            <CustomPaginationActionsTable data={data} />
          </Row>
          <Spacing vertical="10px" />
        </ModalContainer>
      </CenterModal>
    </Modal>
  );
};
