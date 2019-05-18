import React from 'react';
import {HashRouter} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header'
import routes from './routes'

function App() {
  return (
    <div className="App">
      {/* App is the first thing I set up, all it needs is a nav bar (The Header component) and I set it up using HashRouter from react router dom, then i just need to import routes and use it under header so it routes correctly. I also put Header above routes because it will display at All times. */}
      <HashRouter>
        <Header />
        {routes}
      </HashRouter>
    </div>
  );
}

export default App;
