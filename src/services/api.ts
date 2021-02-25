import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.suporte.d1.cx/api',
});

export default api;

export const getHomeData = async () => {
  const token = localStorage.getItem('userToken');

  try {
    const { data } = await api.get('/Home/Summary', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.map(({
      tenant, datamov, lote, produto, timer, sla, status,
    }) => ({
      tenant, datamov, lote, produto, timer, sla, status,
    }));
  } catch (error) {
    return error;
  }
};

export const getStoppedMovements = async () => {
  const token = localStorage.getItem('userToken');

  try {
    const { data } = await api.get('/Home/StoppedMovements', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.map(({
      tenant, datamov, lote, produto, timer, sla, status,
    }) => ({
      tenant, datamov, lote, produto, timer, sla, status,
    }));
  } catch (error) {
    return error;
  }
};

export const getPieChartSla = async () => {
  const token = localStorage.getItem('userToken');

  try {
    const { data } = await api.get('/Home/PieChartSla', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.map(({
      tenant, datamov, lote, produto, timer, sla, status,
    }) => ({
      tenant, datamov, lote, produto, timer, sla, status,
    }));
  } catch (error) {
    return error;
  }
};

export const getStoppedCount = async () => {
  const token = localStorage.getItem('userToken');

  try {
    const { data } = await api.get('/Home/StoppedCount', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.map(({
      tenant, datamov, lote, produto, timer, sla, status,
    }) => ({
      tenant, datamov, lote, produto, timer, sla, status,
    }));
  } catch (error) {
    return error;
  }
};

export const getBtnNotification = async () => {
  const token = localStorage.getItem('userToken');

  try {
    const { data } = await api.get('/Home/BtnNotification', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.map(({
      tenant, datamov, lote, produto, sla, status,
    }) => ({
      tenant, datamov, lote, produto, sla, status,
    }));
  } catch (error) {
    return error;
  }
};
