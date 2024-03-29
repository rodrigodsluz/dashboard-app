import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Modal } from '@material-ui/core';
import { FlexContent, Typography, Notification } from '@d1.cx/components';
import { ArrowLeft } from '@d1.cx/icons';
import { HomeDataContext } from '@src/context/HomeDataContext';
import { Menu } from '@src/components/TopMenu/TopMenu';
import CustomPaginationActionsTable from '../../Table/Table';
import { ErrosGraph } from '@src/components/PieGraph/PieGraph';
import services from '@src/services';
import { Content } from '@src/screens/Worker/styled';
import { ModalContainer, CenterModal, Row, BackButtuon } from './styled';

type OpenProps = {
  open: boolean;
};

export const ErrosModal = ({ open }: OpenProps): JSX.Element => {
  const { configureCloseErrorsModal, startDate, endDate } = useContext(
    HomeDataContext
  );
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [erros, setErros] = useState([]);
  const [totalErros, setTotalErros] = useState(0);
  const handleOpenErroModal = () => {
    configureCloseErrorsModal();
  };
  /**
   * @function
   * @name getData
   *
   * @description
   * Responsável por fazer a chamada na API e organizar os dados para serem tratados
   */
  const getData = useCallback(async (start: string, end: string) => {
    let array = [];
    let totalErros = 0;
    let res = await services.error.getErros(start, end);
    if (res.data) {
      res.data.forEach((element) => {
        let client = handleFormatString(element[0]);
        let quantity = handleFormatString(element[2]);
        totalErros += parseInt(quantity, 10);
        array.push([client, quantity, element[1]]);
      });

      let sortArray = array.sort((a, b) => {
        return b[1] - a[1];
      });
      setData(sortArray);
      getAllErros(array);
      setTotalErros(totalErros);
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
        alert('Ops! É necessário selecionar uma data de ínicio para filtrar');
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

  /**
   * @function
   * @name handleFormatString
   *
   * @description
   * Responsável por fazer o tratamento do array para retornar apenas o nome do cliente
   */

  const handleFormatString = useCallback((value: string) => {
    if (value) {
      return value?.split(': ')[1];
    }
  }, []);

  /**
   * @function
   * @name getAllErros
   *
   * @description
   * Responsável por listar todos os tipos de erros encontrados vindo na request
   */
  const getAllErros = useCallback(
    (data) => {
      let listErrors = [];
      if (data) {
        data.forEach((element) => {
          element[2].forEach((errors) => {
            listErrors.push(errors);
          });
        });
      }
      configureErrorsAndQuantity(listErrors);
    },
    [data]
  );

  /**
   * @function
   * @name configureErrorsAndQuantity
   *
   * @description
   * Responsável por verificar quantos erros de cada tipo existem
   */
  const configureErrorsAndQuantity = useCallback(
    (erros) => {
      let errorsArray = [];
      let filtered = [];
      erros.forEach((element) => {
        let filtered = errorsArray.includes(element);

        if (!filtered) {
          errorsArray.push(element);
        }
      });

      errorsArray.forEach((element) => {
        let quant = erros.filter((elem) => elem === element).length;
        filtered.push([element, quant]);
      });

      setErros(filtered);
    },
    [data]
  );

  useEffect(() => {
    handleSubmit();
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={handleOpenErroModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <CenterModal>
   
        <ModalContainer>
      
          <Content>
            <Menu title="" loading={loading} submit={handleSubmit} />
          </Content>
          <FlexContent>
            <Typography fontSize="20px">Total de erros:</Typography>
            <Typography bold fontSize="22px" horizontal="2px">
              {totalErros}
            </Typography>
          </FlexContent>
          <Row>
            {data.length > 0 ? <ErrosGraph data={erros} /> : null}

            <CustomPaginationActionsTable data={data} />
          </Row>
        </ModalContainer>
      </CenterModal>
    </Modal>
  );
};
