import axios from 'axios';
import { API } from './API';

/**
 * @async
 * @export
 * @function
 * @name get
 *
 * @description
 * Responsável por enviar os dados da comunicação.
 */

export async function getProcesses(start: string, end: string) {
  const token = localStorage.getItem('token');

  const options = {
    url: `${API}/Home/Summary/?date1=${start}&date2=${end}`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios({ method: 'GET', ...options });
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
        log,
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
        log,
      })
    );
  } catch (error) {
    return false;
  }
}

export async function getGraphicData(start: string, end: string) {
  const token = localStorage.getItem('token');

  const options = {
    url: `${API}/Home/PieChartSla?date1=${start}&date2=${end}`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios({ method: 'GET', ...options });
    return data;
  } catch (error) {
    return false;
  }
}

export async function getStoppedMovementsAmount(start: string, end: string) {
  const token = localStorage.getItem('token');

  const options = {
    url: `${API}/Home/StoppedCount?date1=${start}&date2=${end}`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios({ method: 'GET', ...options });
    return data;
  } catch (error) {
    return false;
  }
}

export async function getStoppedMovements(start: string, end: string) {
  const token = localStorage.getItem('token');

  const options = {
    url: `${API}/Home/StoppedMovements?date1=${start}&date2=${end}`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios({ method: 'GET', ...options });
    return data.map(
      ({ created, tenant, datamov, lote, status, step, timer_processing }) => ({
        created,
        tenant,
        datamov,
        lote,
        status,
        step,
        timer_processing,
      })
    );
  } catch (error) {
    return false;
  }
}

export async function getBtnNotification(start: string, end: string) {
  const token = localStorage.getItem('token');

  const options = {
    url: `${API}/Home/BtnNotification?date1=${start}&date2=${end}`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios({ method: 'GET', ...options });
    return data;
  } catch (error) {
    return false;
  }
}
