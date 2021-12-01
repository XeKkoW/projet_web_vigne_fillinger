import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Page2 from './pages/Page2';
import '../src/styles/style.css';



function App() {
  return (
    <div className="fond">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/page2" exact component={Page2} />

          <Route component={NotFound} />
          
        </Switch>
      </BrowserRouter>
    </div>


  );
}


export default App;


