import axios from 'axios';

import { createPayload } from './createPayload';

/**
 * @export
 * @function
 * @name rcsMessageHandle
 */
export const rcsMessageHandle = async (req, res) => {
  const { mobile, message } = req.body;
  const options = createPayload(mobile, message);

  try {
    const responseApi = await axios(options);
    return res.status(responseApi.status).json(responseApi.data);
  } catch (error) {
    return res.status(422).json({ message: 'erro ao enviar o rcs' });
  }
};
/**
 * {
    "mobile" : "+5511985165104",
    "message" : "Testeando rcs via demo"
}
 */
