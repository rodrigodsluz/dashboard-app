import axios from 'axios';

import { createPayload } from './createPayload';

/**
 * @export
 * @function
 * @name rcsCompatibilityHandle
 *
 */
export const rcsCompatibilityHandle = async (req, res) => {
  const options = createPayload(req.body.mobile);

  try {
    const responseApi = await axios(options);
    return res.status(responseApi.status).json(responseApi.data);
  } catch (error) {
    return res.status(422).json({ message: 'nao tem suport' });
  }
};
