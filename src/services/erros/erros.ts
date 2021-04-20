import axios from 'axios';
import { API } from '../API';

/**
 * @async
 * @export
 * @function
 * @name getDataWorker
 *
 * @description
 * Responsável por enviar os dados da comunicação.
 */
export async function getErros(start: string, end: string) {
  const token = localStorage.getItem('token');

  const options = {
    url: `${API}/Home/GetError/?date1=${start}&date2=${end}`,
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
