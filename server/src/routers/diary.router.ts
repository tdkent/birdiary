import { z } from 'zod';

import pool from '../utils/connect.db.js';
import { router, publicProcedure } from '../trpc.js';
import { Sighting } from '../models/sighting.model.js';

const diaryRouter = router({
	getRecentBirds: publicProcedure.query(async () => {
		const { rows }: { rows: Sighting[] } = await pool.query(
			`SELECT * FROM sighting;`
		);
		return { rows };
	}),
	addBird: publicProcedure
		.input(z.object({ name: z.string() }))
		.mutation(async (req) => {
			const { input } = req;
			const { rows } = await pool.query(
				`
			INSERT INTO sighting (diary_id, bird_name, is_new)
			VALUES($1, $2, $3)
			RETURNING sight_id;
			`,
				[1, input.name, false]
			);
			return { rows };
		})
});

export default diaryRouter;
