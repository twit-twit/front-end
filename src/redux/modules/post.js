import {createAction, handleActions} from "redux-actions"
import {produce} from "immer";
import axios from "axios";
import Cookies from "universal-cookie";
import moment from "moment";  //날짜 시간
import { applyMiddleware } from "redux";
import api from "../../shared/api";
import FormData from 'form-data'

const cookies = new Cookies();

//actions 피드 가져오기,추가하기
const GET_POST = "GET_POST";
const ADD_POST = "APP_POST";
const DELETE_POST = "DELETE_POST";

//action creators
const getPost = createAction(GET_POST,(post_list) => ({post_list}));
const addPost = createAction(ADD_POST,(post) => ({post}));
const deletePost = createAction(DELETE_POST,(post_id) => ({post_id}));

//initialState 
const initialState = { 
    list: [],
};

// middlewares


const getPostDB = () => {
  const token = cookies.get("myJWT");
  const userCode = cookies.get("userCode");          

    return async function (dispatch, getState, { history }) {
 
      await api
        .get("/api/feed", {
          headers: { "authorization": `Bearer ${token}`},
          params: {
            feedType: "all",
            userCode: userCode
          }   
        })
        .then((res) => {
          console.log(res);
        dispatch(getPost(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

 
//게시글 생성
const addPostDB = (post) => {
  const token = cookies.get("myJWT");   
  
  console.log(post);
  console.log("token",token);

  

  return async function (dispatch, getState, { history }) {   
    const formData = new FormData();
    const userCode = cookies.get("userCode"); 
    console.log(userCode);
     formData.append("userCode",userCode);
     formData.append("content",post.content);
     formData.append("feedUrl",post.feedUrl);
     formData.append("feedImage", post.feedImage);
     
     
     await api({
       method: "post",
       url: "/api/feed",
       data: formData,
       headers: {
           "authorization": `Bearer ${token}`
       },
       
     })
       .then((res) => {
         window.alert("업로드 되었습니다.");
         history.replace("/");
         dispatch(addPost(post))
         console.log(formData);
       })
       
       .catch((err) => {
         console.log("게시물 작성 실패");
       });
   };
};

//게시글 삭제
const deletePostDB = (post_id = null) => {
  const token = cookies.get("myJWT");   
  return async function (dispatch, getState, { history }) {
    await api
      .delete(`/api/feed/${post_id}`, { post_id })
      .then((doc) => {
        dispatch(deletePost(post_id));
        history.replace("/");
      })
      .catch((err) => {
        window.alert("게시물 삭제에 문제가 있어요");
        console.log("게시물 삭제 실패", err);
      });
  };
};



export default handleActions(
    {
        [GET_POST]: (state, action) => produce(state, (draft) => {
          console.log(state);
            draft.list = action.payload.post_list.results;
        }),
        [ADD_POST]: (state, action) => produce(state, (draft) =>{
            draft.post = action.payload.post;
            //draft.mainData.unshift(action.payload.post);
        }),
        [DELETE_POST]: (state, action) => produce(state, (draft) => {
        draft.post = draft.post.filter((a) => a.id !== action.payload.post_id);
      })

    },initialState
);

const actionCreators = {
    // getPost,
    // addPost,
    getPostDB,
    addPostDB,
    deletePostDB,
}

export {actionCreators};

