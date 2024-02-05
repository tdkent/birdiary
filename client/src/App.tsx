import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '@layouts/Layout';
import Home from '@pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'diary',
        children: [
          {
            index: true,
            element: <div>DIARY PAGE INDEX</div>
          },
          {
            path: ':diaryId',
            element: <div>DIARY DATE: 1/1/2024</div>
          }
        ]
      },
      {
        path: 'birds',
        children: [
          {
            index: true,
            element: <div>BIRDS PAGE INDEX</div>
          },
          {
            path: ':birdId',
            element: <div>BLUE JAY</div>
          }
        ]
      },
      {
        path: 'locations',
        children: [
          {
            index: true,
            element: <div>LOCATIONS PAGE INDEX</div>
          },
          {
            path: ':locationId',
            element: <div>COYOTE HILLS REGIONAL PARK</div>
          }
        ]
      },
      {
        path: 'profiles/:userId',
        element: <div>PROFILE PAGE: tdkent</div>
      },
      {
        path: 'profiles/:userId/edit',
        element: <div>EDIT PROFILE: tdkent</div>
      },
      {
        path: '/account',
        element: <div>Update Account Settings</div>
      },
      {
        path: '/login',
        element: <div>LOGIN</div>
      },
      {
        path: '/register',
        element: <div>REGISTER</div>
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
