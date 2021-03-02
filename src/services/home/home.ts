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
export async function get() {
  const token = localStorage.getItem('token');

  const options = {
    url: `http://api.suporte.d1.cx/api/Home/Summary`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios({ method: 'GET', ...options });

    return data.map(
      ({ tenant, datamov, lote, produto, timer, sla, status }) => ({
        tenant,
        datamov,
        lote,
        produto,
        timer,
        sla,
        status,
      })
    );
  } catch (error) {
    return error;
  }
}
