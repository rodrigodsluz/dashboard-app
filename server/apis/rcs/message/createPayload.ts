import { AxiosRequestConfig } from 'axios';

import { TOKEN } from '../token';

const URL = 'https://services.altu.com.br/outbound/prod/rcs/d1/1';

/**
 * @export
 * @function
 * @name createPayload
 *
 * @description
 * Responsável por criar o payload do login.
 */
export const createPayload = (
  mobile: string,
  message: string
): AxiosRequestConfig => {
  return {
    method: 'POST',
    url: URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: TOKEN,
    },
    data: {
      destination: mobile,
      hsmToBeSent: {
        contentMessage: {
          text: message,
        },
      },
      restartContact: false,
    },
  };
};
