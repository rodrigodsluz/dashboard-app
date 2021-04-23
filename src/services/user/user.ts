import axios from 'axios';
import { API } from './API';

type User = {
  name?: string;
  ocupation?: string;
  image?: string;
  id?: string;
};

type Data = {
  data: string;
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
  const key = localStorage.getItem('key');
  const formData = new FormData();

  formData.append('Nome', user.name);
  formData.append('Ocupacao', user.ocupation);
  formData.append('Imagem', user.image);
  formData.append('Chave', key);

  const options = {
    url: `${API}/User/UserUpdate`,
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios({ method: 'POST', ...options });
    return data;
  } catch (error) {
    return false;
  }
}

export async function getUserPhoto() {
  const token = localStorage.getItem('token');
  const key = localStorage.getItem('key');
  const options = {
    url: `${API}/User/${key}/image`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data }: Data = await axios({ method: 'GET', ...options });
    return data;
  } catch (error) {
    return false;
  }
}

export async function getUserData() {
  const token = localStorage.getItem('token');
  const key = localStorage.getItem('key');
  const options = {
    url: `${API}/User/${key}`,
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
