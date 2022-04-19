import React from 'react';
import './App.css';

//패키지 임포트
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

//페이지 임포트
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Main from "../pages/Main"
import Entrance from '../pages/Entrance';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Route path="/entrance" exact component={Entrance}/>
      <Route path="/" exact component={Main}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/signup" exact component={Signup}/>
    </ConnectedRouter>
  );
}

export default App;
