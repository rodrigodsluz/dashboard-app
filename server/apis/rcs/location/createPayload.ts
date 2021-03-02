import { AxiosRequestConfig } from 'axios';

import { TOKEN } from '../token';

const URL = 'https://services.altu.com.br/outbound/prod/rcs/d1/1';

const createDataUser = (mobile: string, message: string) => {
  return {
    destination: mobile,
    hsmToBeSent: {
      contentMessage: {
        text: message,
        suggestions: [
          {
            action: {
              text: 'Mande sua localização',
              postbackData: 'postback_data_1234',
              shareLocationAction: {},
            },
          },
        ],
      },
    },
  };
};

const createDataAdress = (mobile: string, message: string) => {
  return {
    destination: mobile,
    hsmToBeSent: {
      contentMessage: {
        text: message,
        suggestions: [
          {
            action: {
              text: 'D1 - Jornadas Digitais',
              postbackData: 'postback_data_1234',
              fallbackUrl: 'https://www.google.com/maps/@-23.633645,-46.716525',
              viewLocationAction: {
                latLong: {
                  latitude: '-23.633695',
                  longitude: '-46.716543',
                },
                label: 'D1 - Jornadas Digitais Label',
              },
            },
          },
        ],
      },
    },
    restartContact: false,
  };
};

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
  message: string,
  type: string
): AxiosRequestConfig => {
  const dataPayload =
    type === 'USER'
      ? createDataUser(mobile, message)
      : createDataAdress(mobile, message);

  return {
    method: 'POST',
    url: URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: TOKEN,
    },
    data: dataPayload,
  };
};
