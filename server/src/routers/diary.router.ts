import { z } from 'zod';

import { router, publicProcedure } from '../trpc.js';
import { Bird } from '../models/bird.model.js';

const recentBirds: Bird[] = [
	{
		id: '0',
		name: "Steller's sea eagle",
		date: '2/4/2024',
		isNewBird: true
	},
	{
		id: '1',
		name: 'Blue jay',
		date: '1/28/2024',
		isNewBird: false
	},
	{
		id: '2',
		name: 'American coot',
		date: '1/25/2024',
		isNewBird: false
	},
	{
		id: '3',
		name: 'Bald eagle',
		date: '1/20/2024',
		isNewBird: true
	}
];

const diaryRouter = router({
	getRecentBirds: publicProcedure.query(() => {
		return { recentBirds };
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
			recentBirds.push(newBird);

			return newBird;
		})
});

export default diaryRouter;
