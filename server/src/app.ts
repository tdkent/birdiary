import express, { Request, Response } from 'express';
import { createExpressMiddleware } from '@trpc/server/adapters/express';

import { appRouter } from './routers/index.js';

export const app = express();

app.use('/', (req: Request, res: Response) => {
	res.json({ message: 'Hello world!!!' });
});

app.use(
	'/trpc',
	createExpressMiddleware({
		router: appRouter,
	})
);
