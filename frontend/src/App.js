import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PagePerso from './pages/PagePerso';
import Accueil from './pages/Accueil';
import '../src/styles/style.css';
import Admin from './pages/Admin';
import Youtube from './pages/Youtube';
import NotFound from './pages/NotFound';

//gestion des routes de l'App

function App() {
  return (
    <div className="fond">
      <BrowserRouter>
        <Switch>
          <Route path="/pagePerso" exact component={PagePerso} />
          <Route path="/" exact component={Accueil} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/media" exact component={Youtube} />


          <Route component={NotFound} />

        </Switch>
      </BrowserRouter>
    </div>


  );
}


export default App;


