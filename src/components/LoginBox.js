import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { actionCreators as userActions } from "../redux/modules/user";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const LoginBox = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <Btn
        onClick={() => {
          dispatch(userActions.logoutDB());
          history.replace("/entrance");
          window.location.reload();
        }}
      >
        logout
      </Btn>
    </div>
  );
};

const Btn = styled.button`
  height: 40px;
  width: 320px;
  border: none;
  border-radius: 80px;
  margin: 16px 0px auto 40px;
  background-color: #1d9bf0;
  color: #ffffff;

  :hover {
    background-color: #118ada;
  }
`;

export default LoginBox;
