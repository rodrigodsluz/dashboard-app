import request from 'request';

/**
 * @export
 * @function
 * @name requestApi
 *
 * @description
 * Responsável por retornar um cookie no server.
 */
export const requestApi = async (options: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    request(options, (error, response) => {
      if (error) {
        return reject(error);
      }
      return resolve(response);
    });
  });
};
