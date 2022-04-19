import React from "react";
import styled from "styled-components";

const LoginBox = () => {
  return (
    <div>
        <Btn>logout</Btn>
    </div>
  );
};

const Btn = styled.button`
  height: 40px;
  width: 320px;
  border: none;
  border-radius: 80px;
  margin: 16px 0px auto 40px;
  background-color: #1D9BF0;
  color: #ffffff;

  :hover {
    background-color: #118ada;
  }
`;

export default LoginBox;