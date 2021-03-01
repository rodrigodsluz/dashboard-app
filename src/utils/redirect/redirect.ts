import Router from 'next/router';

type DataRoutes = Array<{
  pathParam: string;
  queryString: string;
}>;
/**
 * @export
 * @function
 * @name redirect
 *
 * @description
 * Responsável por redirecionar de página.
 */
export const redirect = (route: string) => {
  Router.push(route);
};

/**
 * @function
 * @name mapToParams
 *
 * @description
 * Responsável por montar o objeto.
 */
const mapToParams = (item: string) => {
  const key = Object.keys(item);
  return {
    pathParam: `/${item[key[0]]}`,
    queryString: `${key[0]}=${item[key[0]]}`,
  };
};

/**
 * @function
 * @name hasPlusRoutes
 *
 * @description
 * Responsável por verificar a quantidade do array.
 */
const hasPlusRoutes = (dataRoutes: DataRoutes) => {
  return dataRoutes.length > 1;
};

/**
 * @function
 * @name routesWithMoreParams
 *
 * @description
 * Responsável por montar o bojeto correto.
 */
const routesWithMoreParams = (route: string, dataRoutes: DataRoutes) => {
  let queryString = '';
  let pathParam = '';
  for (let i = 0; i < dataRoutes.length; i += 1) {
    pathParam += dataRoutes[i].pathParam;
    queryString += dataRoutes[i].queryString;
    if (i + 1 !== dataRoutes.length) {
      queryString += '&';
    }
  }

  return {
    queryString: `${route}?${queryString}`,
    pathParam: `${route}${pathParam}`,
  };
};

/**
 * @function
 * @name routesParams
 *
 * @description
 * Responsável por criar o objeto correto.
 */
const routesParams = (route: string, dataRoutes: DataRoutes) => {
  return {
    queryString: `${route}?${dataRoutes[0].queryString}`,
    pathParam: `${route}${dataRoutes[0].pathParam}`,
  };
};

/**
 * @function
 * @name checkRoutes
 *
 * @description
 * Responsável por verificar as rotas.
 */
const checkRoutes = (route: string, dataRoutes: DataRoutes) => {
  return hasPlusRoutes(dataRoutes)
    ? routesWithMoreParams(route, dataRoutes)
    : routesParams(route, dataRoutes);
};

/**
 * @function
 * @name getRoutes
 *
 * @description
 * Responsável por gerar as rotas e paramentros.
 */
const getRoutes = (route: string, params: Array<string>) => {
  const routeNext = params.map(mapToParams);
  return checkRoutes(route, routeNext);
};

/**
 * @export
 * @function
 * @name redirectWithParams
 *
 * @description
 * Responsável por redirecionar de página.
 */
export const redirectWithParams = (route: string, params: Array<string>) => {
  const routes = getRoutes(route, params);
  Router.push(routes.queryString, routes.pathParam);
};
