import { createFileRoute } from '@tanstack/react-router';

import { client } from '../trpc';

export const Route = createFileRoute('/')({
  loader: () => {
    const result = client.get.query();
    return result;
  },
  component: Index
});

function Index() {
  const loaderData = Route.useLoaderData();
  return (
    <div className="p-2">
      <h3>Home Page</h3>
      <p>{loaderData}</p>
      <form>
        <input type="text" />
        <button>Add Bird</button>
      </form>
    </div>
  );
}
