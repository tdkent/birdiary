import { z } from 'zod';

import pool from '../utils/db.js';
import { router, publicProcedure } from '../trpc.js';
import { Bird } from '../models/bird.model.js';

const diaryRouter = router({
	getRecentBirds: publicProcedure.query(async () => {
		const { rows } = await pool.query('SELECT * FROM diary_entry_temp');
		return { rows };
	}),
	addBird: publicProcedure
		.input(z.object({ name: z.string() }))
		.mutation((req) => {
			const { input } = req;
			const newBird: Bird = {
				id: `${Math.random()}`,
				name: input.name,
				date: '2/10/24',
				isNewBird: true
			};
			// recentBirds.push(newBird);

			return newBird;
		})
});

export default diaryRouter;
