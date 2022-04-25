import React, {useEffect} from "react";

import {Route, Switch} from "react-router-dom"
import { useDispatch } from "react-redux";

import Nav from './Components/Nav/Nav';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import Form from './Components/Form/Form';
import DogDetail from './Components/DogDetail/DogDetail';

import {getAllDogs, getTemperaments} from "./Actions/index";
import './App.css';

function App() {

const dispatch = useDispatch()

useEffect(() => {
    dispatch(getAllDogs())
}, [])

useEffect(() => {                 
    dispatch(getTemperaments())
}, [])


  return (
    <div className="App">
      <Route path={['/home', '/dogs/', '/dog/', '/dogs/:DogId',]}><Nav /></Route>
      <Switch>
      <Route exact path="/" render={() => <LandingPage />}></Route>
      <Route exact path="/home" render={() => <Home /> }></Route>
      <Route exact path="/dog" render={() => <Form />}></Route>
      <Route exact path="/dogs/:DogId" render={() => <DogDetail />}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
