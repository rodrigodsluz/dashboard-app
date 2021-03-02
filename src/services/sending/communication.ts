import axios from 'axios';

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
