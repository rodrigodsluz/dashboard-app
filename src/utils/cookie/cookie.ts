import cookie from 'js-cookie';

/**
 * @export
 * @function
 * @name setCookie
 * @description
 * Responsável por adicionar um cookie.
 */
export const setCookie = (key: string, value: string) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: '/',
    });
  }
};

/**
 * @export
 * @function
 * @name removeCookie
 *
 * @description
 * Responsável por remover um cookie.
 */
export const removeCookie = (key: string) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

/**
 * @export
 * @function
 * @name getCookie
 *
 * @description
 * Responsável por retornar um cookie não importa se esta ambiente.
 */
export const getCookie = (key: string, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

/**
 * @export
 * @function
 * @name getCookieFromBrowser
 *
 * @description
 * Responsável por retornar um cookie na parte do front end.
 */
const getCookieFromBrowser = (key: string): string => {
  return cookie.get(key);
};

/**
 * @export
 * @function
 * @name getCookieFromServer
 *
 * @description
 * Responsável por retornar um cookie no server.
 */
const getCookieFromServer = (key: string, req): string | undefined => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(';')
    .find((c: string) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split('=')[1];
};
