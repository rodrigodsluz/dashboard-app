import axios from 'axios';
import { API } from './API';

type User = {
  name?: string;
  ocupation?: string;
};

/**
 * @async
 * @export
 * @function
 * @name get
 *
 * @description
 * Responsável por enviar os dados da comunicação.
 */

export async function uploadUser(user: User) {
  const token = localStorage.getItem('token');
  const formData = new FormData();
  formData.append(user.name, user.ocupation);
  const options = {
    url: `${API}/User/UserUpdate`,
    formData,
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  };

  try {
    const { data } = await axios({ method: 'POST', ...options });
    console.log(data);
    return data;
  } catch (error) {
    return false;
  }
}
