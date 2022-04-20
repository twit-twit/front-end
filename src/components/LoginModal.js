import React, { useState } from "react";
// import Modal from "react-awesome-modal"
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Text, TextBox, DivButton, Input, Grid, HrBox } from "../elements/Index";
import SignupModal from "../components/SignupModal";
import { useHistory } from "react-router-dom";
import { emailCheck, pwdCheck } from "../shared/common";
import { actionCreators as userActions } from "../redux/modules/user";

const LoginModal = ({ show, onHide }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [signupModalOn, setSignupModalOn] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  // console.log(userId)
  // console.log(password)

  const login = () => {
    if (userId === "") {
      window.alert("아이디를 입력해주세요.");
      return;
    }

    if (password === "") {
      window.alert("비밀번호를 입력해주세요.");
      return;
    }

    if (!emailCheck(userId)) {
      //영문자(대문자, 소문자) 또는 숫자 4~30자
      window.alert("이메일 형식을 확인해주세요.");
      return;
    }

    if (!pwdCheck(password)) {
      //대소문자, 숫자, 특수문자(!@#$%^&*)가 섞인 4자 이상 20자 미만
      window.alert("비밀번호를 확인해주세요.");
      return;
    }

    dispatch(userActions.loginDB(userId, password));
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <>
        <SignupModal show={signupModalOn} onHide={() => setSignupModalOn(false)} />
      </>
      {/* <>
        <LoginModal show={loginModalOn} onHide={() =>  setLoginModalOn(false)} />
      </> */}
      <Grid is_flex>
        <Grid is_flex>
          <Grid>
            <Grid is_flex>
              <Modal.Header closeButton />
            </Grid>
          </Grid>
          <img src={require("../static/images/twit_logo.jpg")} width="90px" alt="" />
          <Grid />
        </Grid>
      </Grid>
      <Grid is_center>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <Text size="31px">트위터에 로그인하기</Text>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DivButton margin="26px 0px 0px 0px">
            <TextBox is_center>
              <Text is_center>구글로그인</Text>
            </TextBox>
          </DivButton>
          <DivButton margin="16px 0px 0px 0px">
            <TextBox is_middle>
              <img
                src={require("../static/images/Apple_logo.png")}
                alt="Apple logo"
                width="20px"
                height="20px"
              />
              <Text is_middle>Apple에서 가입하기</Text>
            </TextBox>
          </DivButton>
          <DivButton cursor="default" border="none" width="300px" margin="4px">
            <TextBox is_middle verticalAlign="middle">
              <HrBox />
              <Text display="flex" margin="12px">
                또는
              </Text>
              <HrBox />
            </TextBox>
          </DivButton>
          <Grid margin="16px 0px 0px 0px">
            <Input
              width="300px"
              placeholder="아이디를 입력해주세요"
              _onChange={(e) => setUserId(e.target.value)}
            />
          </Grid>
          <Grid margin="16px 0px 0px 0px">
            <Input
              type="password"
              width="300px"
              placeholder="비밀번호를 입력해주세요"
              _onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid margin="16px 0px 0px 0px">
            <DivButton is_center _onClick={()=>{login(); onHide()}}>
              Login
            </DivButton>
          </Grid>
          {/* 모달창 중복문제가 있어 주석처리하고 사용하지 않음. 해결 필요. */}
          {/* <Grid margin="16px 0px 0px 0px">
            <Text>계정이 없으신가요?</Text>{" "}
            <Text
              color="#1d9bf0"
              _onClick={() => {
                setSignupModalOn(true);
                // history.push("/entrance/signup");
              }}
            >
              가입하기
            </Text>
          </Grid> */}
        </Modal.Body>
      </Grid>
    </Modal>
  );
};

export default LoginModal;
