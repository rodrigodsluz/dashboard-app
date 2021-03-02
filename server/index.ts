import express from 'express';
import next from 'next';
import cookieParser from 'cookie-parser';
import { loginHandle as loginApi } from './apis/login';
import { campaignsHandle as campaignsApi } from './apis/campaigns';
import { communicationHandle as communicationApi } from './apis/communication';

import { rcsCompatibilityHandle as rcsCompatibilityApi } from './apis/rcs/compatibility';
import { rcsMessageHandle as rcsMessageApi } from './apis/rcs/message';
import { rcsLocationHandle as rcsLocationApi } from './apis/rcs/location';
import { rcsCardHandle as rcsCardApi } from './apis/rcs/card';
import { rcsCarouselHandle as rcsCarouselApi } from './apis/rcs/carousel';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.use(cookieParser());
  server.post('/api/login', loginApi);
  server.get('/api/campaigns', campaignsApi);
  server.post('/api/send/communication', communicationApi);

  server.post('/api/rcs/compatibility', rcsCompatibilityApi);
  server.post('/api/rcs/message', rcsMessageApi);
  server.post('/api/rcs/location', rcsLocationApi);
  server.post('/api/rcs/card', rcsCardApi);
  server.post('/api/rcs/carousel', rcsCarouselApi);

  server.get('/', (req, res) => app.render(req, res, '/'));
  server.get('/escolha-de-canais', (req, res) =>
    app.render(req, res, '/escolha-de-canais')
  );
  server.get('/comunicacoes', (req, res) =>
    app.render(req, res, '/comunicacoes')
  );
  server.get('/rcs', (req, res) => app.render(req, res, '/rcs'));
  server.all('*', (req, res) => handle(req, res));
  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
