import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { client } from './main';
import Main from '@layouts/Main/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  }
]);

function App() {
  // trpc test
  useEffect(() => {
    const greeting = async () => {
      const result = await client.get.query();
      console.log('trpc test: ', result);
    };
    greeting();
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
