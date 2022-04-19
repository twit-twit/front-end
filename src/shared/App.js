import React from 'react';
import './App.css';
//import { Provider } from 'react-redux';
import styled from "styled-components";

//패키지 임포트
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

//페이지 임포트
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Main from "../pages/Main"
import React from 'react';
import Entrance from '../pages/Entrance';

function App() {
  return (
  <React.Fragment>
    <ConnectedRouter history={history}>
      <div className="App">
        <Route path="/entrance" exact component={Entrance}/>
        <Route path="/" exact component={Main}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
      </div>
    </ConnectedRouter>
  </React.Fragment>
  );
}

export default App;