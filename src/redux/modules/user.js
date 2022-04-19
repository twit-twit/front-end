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
  is_login: false,
};

//middleware
const signupDB = (userId, password, confirmpassword, intro) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("http://3.36.98.164/api/users", {
        userId: userId,
        password: password,
        confirmpassword: confirmpassword,
        intro: intro,
      })
      .then((result) => {
        window.location.reload();
        window.alert("회원가입이 완료되었습니다.");
        history.replace("/entrance");
      })
      .catch((result) => {
        const errorCode = result.FAIL;
        const errorMessage = result.message;

        console.log(errorCode, errorMessage);
        // ..
      });
  };
};
// const loginFB = (id, pwd) => {
//     return function (dispatch, getState, { history }) {
//       auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
//         auth
//           .signInWithEmailAndPassword(id, pwd)
//           .then((user) => {
//             console.log(user);
//             dispatch(setUser({ user_name: user.user.displayName, id: id, user_profile: "", uid: user.user.uid }));
//             history.push("/");
//           })
//           .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage);
//           });
//       });
//     };
//   };

//reducer
export default handleActions({}, initialState);

const actionCreators = {
  signupDB,
};

export { actionCreators };
