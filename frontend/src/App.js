import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import '../src/styles/style.css';


function App() {
  return (
    <div className="fond">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </div>

  );
}


export default App;


