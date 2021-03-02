import { createPayload } from './createPayload';
import { requestApi } from '../../request';

/**
 * @api {post} /api/login
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
 *
 */
export const loginHandle = async (req, res) => {
  const { login, password, recaptcha } = req.body;
  const options = createPayload(login, password, recaptcha);
  const responseApi = await requestApi(options);
  let body = responseApi;
  if (responseApi.statusCode === 200) {
    body = JSON.parse(responseApi.body);
  }
  res.status(responseApi.statusCode).json(body);
};
