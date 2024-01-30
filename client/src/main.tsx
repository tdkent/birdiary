import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen.ts';

const router = createRouter({
  routeTree,
  // 'intent' preloading uses hover and touch events to preload dependencies for the route
  defaultPreload: 'intent', // turns on 'intent' preloading for all Link components
  defaultPreloadStaleTime: 0 // allow React Query to control preload stale time
});

// creates router type
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
