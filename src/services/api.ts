import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.suporte.d1.cx/api',
});

export default api;
