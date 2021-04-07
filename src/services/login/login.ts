import axios from 'axios';
import { API } from '../home/API';

/**
 * @async
 * @export
 * @function
 * @name authentication
 *
 * @description
 * Responsável por enviar os dados de login.
 */
export async function authentication(payload: any) {
  const options = {
    url: `https://api-suporte.d1.cx/api/Login/Authenticate`,
    data: payload,
  };

  try {
    const response = await axios({ method: 'POST', ...options });
    return { error: false, data: response.data };
  } catch (error) {
    return { error: true };
  }
}

export async function getInfoUser(info) {
  const options = {
    url: `${API}/User/${info.keyUser}`,
    headers: {
      authorization: `Bearer ${info.token}`,
    },
  };

  try {
    const { data } = await axios({ method: 'GET', ...options });
    return data;
  } catch (error) {
    return false;
  }
}

export async function getUserPhoto(info) {
  const options = {
    url: `${API}/User/${info.keyUser}/image`,
    headers: {
      authorization: `Bearer ${info.token}`,
    },
  };

  console.log(options.url);

  try {
    const { data } = await axios({ method: 'GET', ...options });
    return data;
  } catch (error) {
    return false;
  }
}
