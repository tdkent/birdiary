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
		.mutation(async (req) => {
			const { input } = req;
			console.log('🚀 ~ .mutation ~ input:', input);
			const newBird: Bird = {
				id: '10',
				name: input.name,
				date: '2/10/24',
				isNewBird: true
			};
			const { rows } = await pool.query(
				`
			INSERT INTO diary_entry_temp (id, name, entry_date, isnewbird)
			VALUES($1, $2, $3, $4)
			RETURNING id;
			`,
				[newBird.id, newBird.name, newBird.date, newBird.isNewBird]
			);
			console.log('rows: ', rows);
			return { rows };
		})
});

export default diaryRouter;
