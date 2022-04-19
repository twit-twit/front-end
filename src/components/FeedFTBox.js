import React from "react";
import styled from "styled-components";


const FeedFTBox = (props) => {
  return (
    <React.Fragment>
      <div>
        <Btn> my feeds </Btn>
      </div>
      <div>
        <Btn> all feeds </Btn>
      </div>
      <div>
        <Box>
          <Text>categoty / feeds filter</Text>
          </Box>
      </div>
      
      
      {/* <ButtonBox>
        <Btn
          _onClick={() => window.open('https://github.com/23hh', '_blank')}
          padding="0 0 0 7px"
          is_border
          width="120px"
          height="38px"
          font_size="16px"
          bold="bold"
          margin="0 10px 0 0"
        >
          넷플릭스 영화 추천
        </Btn>

        <Btn
          _onClick={() => window.open('https://github.com/JooYoung2274', '_blank')}
          padding="0 0 0 7px"
          is_border
          width="120px"
          height="38px"
          font_size="16px"
          bold="bold"
          margin="0 10px 0 0"
        >
         fdfsd
        </Btn>

        <Btn
          _onClick={() => window.open('https://github.com/yong313', '_blank')}
          padding="0 0 0 7px"
          is_border
          width="120px"
          height="38px"
          font_size="16px"
          bold="bold"
          margin="0 10px 0 0"
        >
          fsdfdsfs
        </Btn>
        
      </ButtonBox> */}
    </React.Fragment>
  );
};

// const ButtonBox = styled.div`
//   width: 150px;
//   height: auto;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   padding: 10px;
//   margin: 5px 0;
// `;

const Btn = styled.button`
  height: 52px;
  width: 225px;
  border: none;
  border-radius: 80px;
  margin: 16px 40px auto 40px;
  background-color: #1D9BF0;
  color: #ffffff;

  :hover {
    background-color: #118ada;
  }
`;
const Box = styled.div`
  width: 300px;
  height: 500px;
  border: 1px solid #F7F9F9;
  border-radius:30px;
  background-color: #F7F9F9;
  margin: 50px 40px 0px 40px;
`;
const Text = styled.div`
  width: 110px;
  margin: 15px 0px 10px 13px;
  position: relative;
  font-weight: 650;
  font-size: 20px;
  color: #3e3d3d;
`;
export default FeedFTBox;
