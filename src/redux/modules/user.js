import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";

const cookies = new Cookies();

//actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

//action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

//initialState
const initialState = {
  user: null,
  isLogin: false,
};

//middleware
const signupDB = (userId, password, confirmpassword, intro) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("http://13.125.34.252/api/users", {
        userId: userId,
        password: password,
        confirmpassword: confirmpassword,
        intro: intro,
      })
      .then((res) => {
        window.location.reload();
        window.alert("회원가입이 완료되었습니다.");
        history.replace("/entrance");
      })
      .catch((err) => {
        const errorCode = err.FAIL;
        const errorMessage = err.message;

        console.log(errorCode, errorMessage);
        // ..
      });
  };
};
const loginDB = (userId, password) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("http://13.125.34.252/api/users/login", {
        userId: userId,
        password: password,
      })
      .then((res) => {
        // console.log(res.data.response.accessToken);
        dispatch(
          setUser({
            userId: userId,
          })
        );
        const accessToken = res.data.response.accessToken;
        console.log(accessToken);
        cookies.set("myJWT", accessToken, { path: "/" });
        window.alert(`"${userId}"님 환영합니다`)
        history.replace("/");
        window.location.reload();
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode, errorMessage);
      });
  };
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        cookies.set("isLogin", "success");
        draft.user = action.payload.user;
        draft.isLogin = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        cookies.remove("myJWT");
        cookies.remove("isLogin");
        draft.user = null;
        draft.isLogin = false;
      }),
  },
  initialState
);

const actionCreators = {
  signupDB,
  loginDB,
};

export { actionCreators };
