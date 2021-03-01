import { createPayload } from './createPayload';
import { requestApi } from '../../request';

/**
 * @TODO arrumar a doc
 * @api {GET} /api/campaigns
 * @apiVersion 1.0.0
 * @apiName login
 *
 * @apiParam (Request body) {String} login
 * @apiParam (Request body) {String} password
 *
 * @apiExample {js} Example usage:
 * const payload = {
 *   "login": "username"
 *   "password": "password"
 * }
 *
 * @apiSuccess (Success 201)
 * @apiError (error 401)
 */
export const campaignsHandle = async (req, res) => {
  const options = createPayload(req.headers.authorization);

  const responseApi = await requestApi(options);

  let body = {};
  if (responseApi.statusCode === 200) {
    body = JSON.parse(responseApi.body);
  }
  return res.status(responseApi.statusCode).json(body);
};
