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
export async function getProcesses() {
  const token = localStorage.getItem('token');

  const options = {
    url: `http://api.suporte.d1.cx/api/Home/Summary`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios({ method: 'GET', ...options });
    //console.log(data);
    return data.map(
      ({
        tenant,
        datamov,
        lote,
        produto,
        sla,
        status,
        timer_processing,
        logger_ini,
        logger_fim,
        run_timer,
        hierarquia,
        action,
        steps,
        arquivo_job,
        steps_serie,
        step_start_end,
        descricao,
        memory_free,
        memory_total,
        ip,
        host,
        link,
        obs,
        log
      }) => ({
        tenant,
        datamov,
        lote,
        produto,
        sla,
        status,
        timer_processing,
        logger_ini,
        logger_fim,
        run_timer,
        hierarquia,
        action,
        steps,
        arquivo_job,
        steps_serie,
        step_start_end,
        descricao,
        memory_free,
        memory_total,
        ip,
        host,
        link,
        obs,
        log
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

export async function getStoppedMovements() {
  const token = localStorage.getItem('token');

  const options = {
    url: `http://api.suporte.d1.cx/api/Home/StoppedMovements`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios({ method: 'GET', ...options });
    return data.map(
      ({
        created,
        tenant,
        datamov,
        lote,
        status,
        step,
        timer_processing
      }) => ({
        created,
        tenant,
        datamov,
        lote,
        status,
        step,
        timer_processing
      })
    );
  } catch (error) {
    return error;
  }
}
