import React from 'react';
import {HashRouter} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        {routes}
      </HashRouter>
    </div>
  );
}

export default App;
