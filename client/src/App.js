import './App.css';

import {Route, Switch} from "react-router-dom"

import Nav from './Components/Nav/Nav';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import Form from './Components/Form/Form';

function App() {
  return (
    <div className="App">
      <Route path={['/home', '/dogs/', '/dog/', '/dogs/:DogId',]}><Nav /></Route>
      <Switch>
      <Route exact path="/" render={() => <LandingPage />}></Route>
      <Route exact path="/home" render={() => <Home /> }></Route>
      <Route exact path="/dog" render={() => <Form />}></Route>
      {/* <Route exact path="/videogame/:gameId" render={() => <VideogameDetail />}></Route> */}
      </Switch>
      
    </div>
  );
}

export default App;
