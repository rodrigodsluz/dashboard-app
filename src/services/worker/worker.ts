import axios from 'axios';
import { API } from '../API';
/**
 * @async
 * @export
 * @function
 * @name send
 *
 * @description
 * Responsável por enviar os dados da comunicação.
 */
export async function send(payload: any, token: string) {
  const options = {
    url: `api/send/communication`,
    data: payload,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios({ method: 'POST', ...options });
    return { error: false, data: response.data };
  } catch (error) {
    return { error: true };
  }
}

/**
 * @async
 * @export
 * @function
 * @name getDataWorker
 *
 * @description
 * Responsável por enviar os dados da comunicação.
 */
export async function getDataWorker(start: string, end: string) {
  const token = localStorage.getItem('token');

  const options = {
    url: `${API}/Worker/GetTable/?date1=${start}&date2=${end}`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios({ method: 'GET', ...options });
    return { error: false, data: response.data };
  } catch (error) {
    return { error: true };
  }
}

/**
 * @async
 * @export
 * @function
 * @name getGeneretedJobs
 *
 * @description
 * Responsável por enviar os dados da comunicação.
 */
export async function getGeneretedJobs(start: string, end: string) {
  const token = localStorage.getItem('token');

  const options = {
    url: `${API}/Worker/GetGenerationJobs/?date1=${start}&date2=${end}`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios({ method: 'GET', ...options });
    return { error: false, data: response.data };
  } catch (error) {
    return { error: true };
  }
}

/**
 * @async
 * @export
 * @function
 * @name getLineGraph
 *
 * @description
 * Responsável por enviar os dados da comunicação.
 */
export async function getLineGraph() {
  const token = localStorage.getItem('token');

  const options = {
    url: `${API}/Worker/GetLineGraph`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios({ method: 'GET', ...options });
    return { error: false, data: response.data };
  } catch (error) {
    return { error: true };
  }
}
