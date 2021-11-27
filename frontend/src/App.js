import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Notfound from './pages/Notfound';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>


  );
}


export default App;


