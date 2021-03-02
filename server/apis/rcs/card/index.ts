import axios from 'axios';

import { createPayload } from './createPayload';

/**
 * @export
 * @function
 * @name rcsCardHandle
 */
export const rcsCardHandle = async (req, res) => {
  const {
    mobile,
    title,
    description,
    urlImage,
    action,
    type,
    position,
    layout,
  } = req.body;

  const options = createPayload(
    mobile,
    title,
    description,
    urlImage,
    action,
    type,
    position,
    layout
  );

  try {
    const responseApi = await axios(options);
    return res.status(responseApi.status).json(responseApi.data);
  } catch (error) {
    return res.status(422).json({ message: 'erro ao enviar o rcs' });
  }
};
