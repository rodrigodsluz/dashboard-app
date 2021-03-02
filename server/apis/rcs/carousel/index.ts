import axios from 'axios';

import { createPayload } from './createPayload';

/**
 * @export
 * @function
 * @name rcsCarouselHandle
 */
export const rcsCarouselHandle = async (req, res) => {
  const { mobile, cards } = req.body;
  const options = createPayload(mobile, cards);
  const responseApi = await axios(options);
  return res.status(responseApi.status).json(responseApi.data);
};
/**
 * {
    "mobile" : "+5511985165104",
    "message" : "Testeando rcs via demo"
}
 */
