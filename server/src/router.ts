import { router } from './trpc.js';
import diaryRouter from './routers/diary.router.js';

export const appRouter = router({
	diary: diaryRouter
});

export type AppRouter = typeof appRouter;
