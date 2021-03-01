import axios from 'axios';

import { createPayload } from './createPayload';

/**
 * @export
 * @function
 * @name rcsLocationHandle
 */
export const rcsLocationHandle = async (req, res) => {
  const { mobile, message, type } = req.body;
  const options = createPayload(mobile, message, type);
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
