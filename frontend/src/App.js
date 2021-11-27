import Home from './pages/Homes';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component = {Home} />
      </Switch>
    </BrowserRouter>
      /*<div className="App">
        <h1>Hello Magueule</h1>
        <Home/>
      </div>*/
  );
}

export default App;
