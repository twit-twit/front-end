import React from "react";
import styled from "styled-components";
import LoginBox from "./LoginBox";

const FollowerList = () => {
  return (
    <>
      <LoginBox/>
      <Box>
        <Text style={{margin:'12px 80px 0px 2px'}}>follow list</Text> 
        <BB>   
            <MyImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1h9GZH18sUSO-8P_coFOJehZ1KkPo-CUJ2816jM_kaQoascDIj3vWzaBt2wx3X1Wwz8&usqp=CAU"/>
            <Text>userId</Text>     
            <Btn>Following</Btn>
        </BB>
        <BB>   
            <MyImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1h9GZH18sUSO-8P_coFOJehZ1KkPo-CUJ2816jM_kaQoascDIj3vWzaBt2wx3X1Wwz8&usqp=CAU"/>
            <Text>userId</Text>     
            <Btn>Following</Btn>
        </BB>
      </Box>
      <Box>
         <Text>follower list</Text> 
         <BB>   
            <MyImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1h9GZH18sUSO-8P_coFOJehZ1KkPo-CUJ2816jM_kaQoascDIj3vWzaBt2wx3X1Wwz8&usqp=CAU"/>
            <Text>userId</Text>     
            <Btn>Following</Btn>
        </BB>
      </Box>
   </>
  );
};

const Box = styled.div`
  width: 320px;
  height: 500px;
  border: 1px solid #F7F9F9;
  border-radius:30px;
  background-color: #F7F9F9;
  margin: 16px 0px auto 40px;
`;

const Text = styled.div`
  width: 120px;
  margin: 15px 0px 10px 13px;
  position: relative;
  font-weight: 650;
  font-size: 20px;
  color: #3e3d3d;
`;

const BB = styled.div`
  width: 322px;
  height: 90px;
  //margin: 5px 0px 0px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #F7F9F9;
  

  :hover {
    background-color: #dce2e2;
  }
`;

const MyImage = styled.img`
  height: 50px;
  width: 50px;
  margin: 10px 0px 10px 20px;
  border-radius: 50%
`;

const Btn = styled.button`
  height: 40px;
  width: 90px;
  border: 1px solid #a4a7aa;
  border-radius: 30px;
  margin: 10px 16px 10px 16px;
  background-color: #ffffff;
  color: #272c30;
  font-weight: 600;
  font-size: 15px;

  :hover {
    background-color: #fff2f2;
    color: #fa4141;
    border: 1px solid #fa4141;
    content: "Unfollow";
  }
`;

export default FollowerList;

