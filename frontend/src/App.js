import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PagePerso from './pages/PagePerso';
import NotFound from './pages/NotFound';
import Accueil from './pages/Accueil';
import '../src/styles/style.css';
import Admin from './pages/Admin';
import DisplayOne from './components/DisplayOne';
import Youtube from './pages/Youtube';



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


