import { useEffect } from 'react';

import { client } from './main';
import Main from '@layouts/Main/Main';

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
      <Main />
    </div>
  );
}

export default App;
