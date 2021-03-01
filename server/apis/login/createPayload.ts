import { URL_APIS } from '../../constants';

/**
 * @export
 * @function
 * @name createPayload
 *
 * @description
 * Responsável por criar o payload do login.
 */
export const createPayload = (
  login: string,
  password: string,
  recaptcha: any
) => {
  return {
    method: 'POST',
    url: URL_APIS.login,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    form: {
      grant_type: 'password',
      username: login,
      password,
      IsPersistent: 'null',
      recaptcha,
    },
  };
};
