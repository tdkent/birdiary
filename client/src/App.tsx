import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { client } from "./main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  // trpc test
  useEffect(() => {
    console.log("Attempting to fetch data");
    const greeting = async () => {
      const result = await client.get.query();
      console.log("trpc test: ", result);
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
