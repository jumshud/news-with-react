import React from 'react';
import AllRoutes from './routes'
import { createBrowserHistory } from 'history';

function App() {
  return (
      <AllRoutes history={createBrowserHistory()}/>
  );
}

export default App;
