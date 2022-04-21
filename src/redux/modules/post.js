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
const deletePost = createAction(DELETE_POST,(feed_code) => ({feed_code}));

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
         window.location.reload();
         dispatch(addPost(post))
         console.log(formData);
       })
       
       .catch((err) => {
         console.log("게시물 작성 실패");
       });
   };
};

//게시글 삭제
const deletePostDB = (feed_code) => {
  const token = cookies.get("myJWT");   
  const userCode = cookies.get("userCode"); 
 
  console.log(feed_code);
  return async function (dispatch, getState, { history }) {
    await api
      .delete("/api/feed", {
        headers: { "authorization": `Bearer ${token}`},
        params: {
          feedCode: feed_code,
          userCode: userCode
        }  
      })
      .then((res) => {
        //console.log(res);
        dispatch(deletePost(feed_code));
        history.replace("/");
        window.location.reload();
      })
      .catch((err) => {
        window.alert("게시물 삭제 실패");
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
        draft.list = draft.list.filter((a) => a.feed_code !== action.payload.feed_code);
        console.log(state, action);
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

