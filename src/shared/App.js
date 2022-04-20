import React, { useEffect } from "react";
import "./App.css";
//import { Provider } from 'react-redux';
import styled from "styled-components";

//패키지 임포트
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/user";

//페이지 임포트
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import Main from "../pages/Main";
import Entrance from "../pages/Entrance";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreators.loginCheckDB());
  }, []);
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <div className="App">
          <Route path="/" exact component={Main} />
          <Route path="/entrance" exact component={Entrance} />
          {/* <Route path="/entrance/login" exact component={LoginModal} />
          <Route path="/entrance/signup" exact component={SignupModal} /> */}
        </div>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
