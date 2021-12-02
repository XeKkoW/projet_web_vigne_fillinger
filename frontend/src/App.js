import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PagePerso from './pages/PagePerso';
import NotFound from './pages/NotFound';
import Accueil from './pages/Accueil';
import '../src/styles/style.css';



function App() {
  return (
    <div className="fond">
      <BrowserRouter>
        <Switch>
          <Route path="/pagePerso" exact component={PagePerso} />
          <Route path="/" exact component={Accueil} />

          <Route component={NotFound} />

        </Switch>
      </BrowserRouter>
    </div>


  );
}


export default App;


