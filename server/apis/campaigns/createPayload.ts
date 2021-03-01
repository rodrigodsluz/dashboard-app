import { URL_APIS } from '../../constants';

/**
 * @export
 * @function
 * @name createPayload
 *
 * @description
 * Responsável por criar o payload da busca de uma campanha.
 */
export const createPayload = (token: string) => {
  return {
    method: 'GET',
    // url: URL_APIS.campaigns,
    headers: {
      // TenantId: TENANT_ID,
      Authorization: token,
    },
  };
};
