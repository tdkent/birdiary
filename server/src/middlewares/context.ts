/* eslint-disable @typescript-eslint/no-unused-vars */
import * as trpcExpress from '@trpc/server/adapters/express';

export const createContext = ({
	req,
	res
}: trpcExpress.CreateExpressContextOptions) => {
	return {};
};
