import React from "react";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import { IoIosMore } from "react-icons/io";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/modules/post";

const Post = (props) => {
  const dispatch = useDispatch();
  console.log(props);

  return (
      <PostBox>
          <Grid is_flex padding="16px" >
              <BB>
              <MyImage src="https://t1.daumcdn.net/cfile/tistory/263B293C566DA66B27"/>
                 <Text>{props.userCode}</Text>
                 <Btn onC>Follow</Btn> 
                 <button onClick={() => {dispatch(actionCreators.deletePostDB(props.feedCode))}}>삭제</button>
              </BB>
            <IoIosMore style={{margin:'-40px 0px 0px 0px'}} size="30px"/>
          </Grid>
          <Textt style={{margin:'-40px 0px 5px -145px'}}>{props.createdAt}</Textt>
          <Grid padding="50xpx">
              <Textt style={{margin:'10px 0px 5px -10px'}}>{props.content}</Textt>
          </Grid>
          <Grid padding="50px">
              <Image shape="rectangle" alt="profile" src={`https://sparta-hs.shop${props.feedImage}`}/>
          </Grid>
      </PostBox>
      
  ); 
};

// Post.defaultProps = {
    
//     user_info:{
//         userId: "daun",
//         image: "https://ifh.cc/g/WBsSQN.png"
//     },
//     image_url:"https://ifh.cc/g/40ohfh.jpg",
//     contents:"아아아아아아앙아아앙아아ㅏㅏ졸려ㅕㅕㅕㅕㅕㅕㅕㅕㅕㅕㅕ",
//     insert_dt: "2022-04-16 10:00:00",
// };

const Btn = styled.button`
  height: 36px;
  width: 76px;
  border: none;
  border-radius: 30px;
  margin: 10px 16px 10px 16px;
  background-color: #272c30;
  color: white;

  :hover {
    background-color: #42464a;
  }
`;

const PostBox = styled.div`
    width: 600px;
    //height: 1437px;
    border: 1px solid #EFF3F4;
    background-color: #FFFFFF;
    max-width: 600px;

  :hover {
    background-color: #EFF3F4;
  }
`;
const BB = styled.div`
  width: 300px;
  //margin: 5px 0px 0px 5px;
  display: flex;
`;
const MyImage = styled.img`
  height: 55px;
  width: 55px;
  margin: 10px 0px 10px 0px;
  border-radius: 50%
`;
const Text = styled.div`
  width: 50px;
  margin: 15px 0px 10px 13px;
  position: relative;
  font-weight: 590;
  font-size: 19px;
  color: #3e3d3d;
`;

const Textt = styled.div`
  width: 600px;
  //margin: 15px 0px 10px 13px;
  position: relative;
  font-weight: 500;
  font-size: 15px;
  color: #3e3d3d;
`;
export default Post;




