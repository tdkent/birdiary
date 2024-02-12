// Imports
import { RouterProvider } from 'react-router-dom';
// Internal Imports
import router from './routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
