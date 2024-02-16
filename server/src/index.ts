import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import * as trpcExpress from '@trpc/server/adapters/express';

import { appRouter } from './router.js';
import { createContext } from './middlewares/context.js';
import { port } from './configs/env.config.js';

const app = express();

// allow restricted resources to be accessed from frontend domain
app.use(cors());

// extract body of request expose in req.body
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	'/trpc',
	trpcExpress.createExpressMiddleware({
		router: appRouter,
		createContext
	})
);

app.listen(port, () => console.log('Birdiary API on port ' + port + '...'));
