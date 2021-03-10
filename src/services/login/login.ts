import axios from 'axios';

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
