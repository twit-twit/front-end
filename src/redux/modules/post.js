import {createAction, handleActions} from "redux-actions"
import {produce} from "immer";
import axios from "axios";
import moment from "moment";  //날짜 시간
import { applyMiddleware } from "redux";

//actions 피드 가져오기,추가하기
const GET_POST = "GET_POST";
const ADD_POST = "APP_POST";

//action creators
const getPost = createAction(GET_POST,(post_list) => ({post_list}));
const addPost = createAction(ADD_POST,(feed) => ({feed}));

//initialState (리듀서가 사용할)
const initialState = {
    Feeds: [],
    postId: "",
    userId: "",
    image_url: [],
    comment: "",
  
};

// middlewares
const getPostDB = () => {
  const token = sessionStorage.getItem("token");

    return async function (dispatch, getState, { history }) {
  
      await axios
        .get("http://3.36.98.164/api/feed", {
          headers: { Authorization: token },
          data: {
            feedType: "",
            userCode: "",  
          }   
        })
        .then((res) => {
          console.log(res);
        dispatch(getPost(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };


export default handleActions(
    {
        [GET_POST]: (state, action) => produce(state, (draft) => {
            draft.list = action.payload.post_list;
        }),
        [ADD_POST]: (state, action) => produce(state, (draft) =>{

        })

    },initialState
);

const actionCreators = {
    getPost,
    addPost,
    getPostDB,
}

export {actionCreators};

