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
const addPost = createAction(ADD_POST,(post) => ({post}));

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
        .get("http://13.125.34.252/api/feed", {
          headers: { authorization: token },
          data: {
            feedType: "",
            userCode: "",  
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
  return async function (dispatch, getState, { history }) {
    const token = sessionStorage.getItem("token");
     const formData = new FormData();
     formData.append("file", post.file);
     formData.append(
       "postDtos",
       new Blob([JSON.stringify({ contents: post.contents})], {
         type: "application/json",
       })
     );
     await axios({
       method: "post",
       url: "http://13.125.34.252/api/feed",
       headers: {
           "Content-Type": `multipart/form-data`,
           "authorization": `${token}`
       },
       data:{
        // userCode: <userCode>(내 유저 코드)
        // content:<content>,
        // feedUrl:<feedUrl>,
        // feedImage:<feedImage>
       },
     })
       .then((res) => {
         window.alert("업로드 되었습니다.");
         dispatch(addPost(post))
       })
       .catch((err) => {
         console.log("내가 작성한 게시물 조회 실패");
       });
   };
};



export default handleActions(
    {
        [GET_POST]: (state, action) => produce(state, (draft) => {
            draft.list = action.payload.post_list;
        }),
        [ADD_POST]: (state, action) => produce(state, (draft) =>{
            draft.post = action.payload.post;
        })

    },initialState
);

const actionCreators = {
    getPost,
    addPost,
    getPostDB,
    addPostDB,
}

export {actionCreators};

