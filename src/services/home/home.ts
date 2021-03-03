import axios from 'axios';

/**
 * @async
 * @export
 * @function
 * @name get
 *
 * @description
 * Responsável por enviar os dados da comunicação.
 */
export async function getData() {
  const token = localStorage.getItem('token');

  const options = {
    url: `http://api.suporte.d1.cx/api/Home/Summary`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios({ method: 'GET', ...options });
    // console.log(data);
    return data.map(
      ({
        tenant,
        datamov,
        lote,
        produto,
        sla,
        status,
        logger_ini,
        logger_fim,
      }) => ({
        tenant,
        datamov,
        lote,
        produto,
        sla,
        status,
        logger_ini,
        logger_fim,
      })
    );
  } catch (error) {
    return error;
  }
}

export async function getGraphicData() {
  const token = localStorage.getItem('token');

  const options = {
    url: `http://api.suporte.d1.cx/api/Home/PieChartSla`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios({ method: 'GET', ...options });
    return data;
  } catch (error) {
    return error;
  }
}

export async function getStoppedMovementsAmount() {
  const token = localStorage.getItem('token');

  const options = {
    url: `http://api.suporte.d1.cx/api/Home/StoppedCount`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios({ method: 'GET', ...options });
    return data;
  } catch (error) {
    return error;
  }
}
