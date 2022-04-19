import React from "react";
import Text from "../elements/Image";
import styled from "styled-components";
import FeedFTBox from "./FeedFTBox";

const UserBox = () => {
  return (
    <>
    <div>
    <Logo src="https://ifh.cc/g/wCz3oX.png"/>
    </div>
       <MyImage src="https://t1.daumcdn.net/cfile/tistory/263B293C566DA66B27"/>
       <Introduce>클론코딩인듯 클론코딩아닌 클론코딩같은</Introduce>
       <div>
        <FeedFTBox/>
    </div>
    </>
   
  )
};

const Logo = styled.img`
  height: 45px;
  width: 45px;
  margin: 20px 180px 10px 0px;
`;

const MyImage = styled.img`
  height: 100px;
  width: 100px;
  margin: 10px 40px 10px 40px;
  border-radius: 50%
`;

const Introduce = styled.div`
  width: 150px;
  margin: 20px 0px 100px 115px;
  border: 1px solid #F7F9F9;
  border-radius:10px;
  //background-color: #F7F9F9;
  font-size:13px;
  color: #536471;
`;


export default UserBox;