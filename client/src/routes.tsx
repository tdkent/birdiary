// Imports
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route
} from 'react-router-dom';
// Internal Imports
import Layout from '@layouts/Layout';
import Home from '@pages/Home';
import Error from '@components/Error/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
    </Route>
  )
);

export default router;
