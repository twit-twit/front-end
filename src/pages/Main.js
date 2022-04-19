import React, {useState} from "react";
import CenterBox from "../components/CenterBox";
import FollowerList from "../components/FollowerList";
import HeadBox from "../components/HeadBox"
import styled from "styled-components";
import UserBox from "../components/UserBox";

const Main = () => {
return (
  <BBox>
    <div>
      <UserBox/>
    </div>
    <Box>
      <HeadBox/>
      <Hr/>
      <CenterBox/>     
    </Box> 
    <div>
      <FollowerList/>
    </div>
    
  </BBox>
  );
  
};

const Box = styled.div`
  width: 600px;
  height: 1437px;
  border-top: 0px solid #EFF3F4;
  border-right: 1px solid #EFF3F4;
  border-bottom: 0px solid #EFF3F4;
  border-left: 1px solid #EFF3F4;
  background-color: #FFFFFF;
  max-width: 600px;
`;

const BBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 15px 50px
`;

const Hr = styled.div`
  display: flex;
  border:none;
  justify-content: center;
  margin: 0px 0px 4px 0px;
  background-color: #EFF3F4;
  height: 1px;
`;


export default Main;
