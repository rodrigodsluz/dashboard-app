import { v1 as uuidv1 } from 'uuid';

import { URL_APIS } from '../../constants';

/**
 * @export
 * @function
 * @name createPayload
 *
 * @description
 * Responsável por criar o payload do envio da comunicação.
 */
export const createPayload = (
  name: string,
  email: string,
  mobile: string,
  communicationId: string,
  token: string
) => {
  const data = createData(name, email, mobile, communicationId);

  return {
    method: 'POST',
    // url: URL_APIS.communication,
    headers: {
      // TenantId: TENANT_ID,
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
};

/**
 * @export
 * @function
 * @name createData
 *
 * @description
 * Responsável por criar o data do envio da comunicação.
 */
const createData = (
  name: string,
  email: string,
  mobile: string,
  communicationId: string
) => {
  return {
    CommunicationId: communicationId,
    IsTest: false,
    Customers: [
      {
        Customer: {
          identification: email,
          name,
          emails: [
            {
              address: email,
              kind: {
                id: 'admin_residential',
              },
              preferencial: true,
              optOut: false,
            },
          ],
          phones: [
            {
              formattedNumber: mobile,
              kind: {
                id: 'admin_cellphone',
              },
            },
          ],
        },
        ExternalKey: uuidv1(),
      },
    ],
  };
};
