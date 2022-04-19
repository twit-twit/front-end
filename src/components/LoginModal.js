import React, { useState } from "react";
// import Modal from "react-awesome-modal"
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Text, TextBox, DivButton, Input, Grid, HrBox } from "../elements/Index";
import SignupModal from "../components/SignupModal";

const LoginModal = ({ show, onHide }) => {
  const [signupModalOn, setSignupModalOn] = useState(false);
  const [login, setLogin] = useState(true);
  //   const aaa = () => {
  //     setSignupModalOn(true);
  //     // props.setLoginModal();
  //   };
  //   const loginToggle = props.loginState;
  //   console.log(loginToggle)
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <>
        <SignupModal
          show={signupModalOn}
          onHide={() => setSignupModalOn(false)}
        />
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
            <Input width="300px" placeholder="아이디를 입력해주세요" />
          </Grid>
          <Grid margin="16px 0px 0px 0px">
            <Input width="300px" placeholder="비밀번호를 입력해주세요" />
          </Grid>
          <Grid margin="16px 0px 0px 0px">
            <DivButton is_center _onClick={onHide}>
              닫기
            </DivButton>
          </Grid>
          <Grid margin="16px 0px 0px 0px">
            <Text>계정이 없으신가요?</Text>{" "}
            <Text
              color="#1d9bf0"
              _onClick={() => {
                setSignupModalOn(true);
              }}
            >
              가입하기
            </Text>
          </Grid>
        </Modal.Body>
      </Grid>
    </Modal>
  );
};

export default LoginModal;
