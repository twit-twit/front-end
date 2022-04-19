import React from "react";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/post";
import styled from "styled-components";
//import { history } from "../redux/configureStore";

const CenterBox = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post);

  console.log(post_list);

  // React.useEffect(() => {
  //   if(post_list.length === 0 ){
  //     dispatch(postActions.getPostDB());
  //   }
  // }, []);
  React.useEffect(() => {
    dispatch(actionCreators.getPostDB());
  }, []);

  return (
      <div>
        <Text>ALL FEEDS</Text>
          <Post/>
          {/* {post_list && post_list.map((p, idx) => {
            return<Post{...p}/>
          })} */}

      </div >
  ); 
};

// const Btn = styled.img`
//   height: 45px;
//   width: 45px;
//   margin: 20px 180px 10px 0px;
// `;
const Text = styled.div`
  width: 110px;
  margin: 15px 0px 10px 13px;
  position: relative;
  font-weight: 650;
  font-size: 18px;
  color: #3e3d3d;
`;


export default CenterBox;
