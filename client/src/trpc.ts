import { createTRPCReact, httpBatchLink } from '@trpc/react-query';

import type { AppRouter } from '../../server/src/router';

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc'
    })
  ]
});
