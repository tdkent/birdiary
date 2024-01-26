import express, { Request, Response } from 'express';
import cors from 'cors';
import { createExpressMiddleware } from '@trpc/server/adapters/express';

import { appRouter } from './routers/index.js';

export const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

app.use(
	'/trpc',
	createExpressMiddleware({
		router: appRouter,
	})
);

app.use('/', (req: Request, res: Response) => {
	res.json({ message: 'Hello world!!!' });
});
