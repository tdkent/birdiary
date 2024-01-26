import { trpc } from '../../trpc.js';

export const appRouter = trpc.router({
	get: trpc.procedure.query(() => {
		return 'Hello World from the Server!';
	}),
});

export type AppRouter = typeof appRouter;
