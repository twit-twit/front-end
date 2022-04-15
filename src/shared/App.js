import './App.css';

//패키지 임포트
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
// import { history } from "../redux/configureStore";

//페이지 임포트
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Main from "../pages/Main"

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Main}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/sigup" exact component={Signup}/>
    </div>
  );
}

export default App;
