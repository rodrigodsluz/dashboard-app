import { createPayload } from './createPayload';
import { requestApi } from '../../request';

/**
 * @TODO arrumar a doc
 * @api {GET} /api/communication
 * @apiVersion 1.0.0
 * @apiName communication
 *
 * @apiParam (Request body) {String} name
 * @apiParam (Request body) {String} email
 * @apiParam (Request body) {String} mobile
 * @apiParam (Request body) {String} communicationId
 *
 * @apiExample {js} Example usage:
 * const payload = {
 *   "name": "name"
 *   "email": "email"
 *   "mobile": "mobile"
 *   "communicationId": "communicationId"
 * }
 *
 * @apiSuccess (Success 20)
 * @apiError (error 401)
 */
export const communicationHandle = async (req, res) => {
  const { name, email, mobile, communicationId } = req.body;

  const ddi = mobile.substring(0, 3);
  const ddd = mobile.substring(3, 5);
  const phoneOne = mobile.substring(5, 10);
  const phoneTwo = mobile.substring(10, mobile.length);

  const phoneWithMask = `${ddi} (${ddd}) ${phoneOne}-${phoneTwo}`;

  const options = createPayload(
    name,
    email,
    phoneWithMask,
    communicationId,
    req.headers.authorization
  );

  const responseApi = await requestApi(options);

  let { body } = responseApi;
  if (responseApi.statusCode === 204) {
    body = {};
  }
  res.status(responseApi.statusCode).json(body);
};
