import { AxiosRequestConfig } from 'axios';

const URL =
  'https://func-rcs-d1-capabilitycheck-dev.azurewebsites.net/api/CapabilityCheck?code=FrfR53znxdEUBQJnQLvPywCsvZsRhK/ReGX5SyO/ytUt9xmyzGVaZg==';

/**
 * @export
 * @function
 * @name createPayload
 *
 * @description
 * Responsável por criar o payload do login.
 */
export const createPayload = (mobile: string): AxiosRequestConfig => {
  return {
    method: 'POST',
    url: URL,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      senderPhoneNumber: mobile,
      mode: 'capcheck',
    },
  };
};
