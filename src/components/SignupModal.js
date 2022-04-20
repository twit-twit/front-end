import React, { useState, useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";

// import Modal from "react-awesome-modal"
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { Text, TextBox, DivButton, Input, Grid, Image } from "../elements/Index";
import Upload from "../shared/Upload";
import LoginModal from "./LoginModal";
import { emailCheck, pwdCheck } from "../shared/common";

const SignupModal = ({ show, onHide }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);
  const [loginModalOn, setLoginModalOn] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [img, setImg] = useState("");
  const [intro, setIntro] = useState("");
  // console.log(userId);
  // console.log(password);
  // console.log(confirmpassword);
  // console.log(intro);

  const signup = () => {
    if (userId === "") {
      window.alert("아이디를 입력해주세요.");
      return;
    }

    if (password === "") {
      window.alert("비밀번호를 입력해주세요.");
      return;
    }

    if (intro === "") {
      window.alert("자기소개를 입력해주세요.");
      return;
    }

    if (password !== confirmpassword) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다.");
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

    dispatch(userActions.signupDB(userId, password, confirmpassword, intro));
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
        <LoginModal show={loginModalOn} onHide={() => setLoginModalOn(false)} />
      </>
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
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <Text size="31px">계정을 생성하세요</Text>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Grid>
          <Input
            type="text"
            placeholder="아이디를 입력해주세요"
            _onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
        </Grid>
        <Grid margin="16px 0px 0px 0px">
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            _onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>
        <Grid margin="16px 0px 0px 0px">
          <Input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            _onChange={(e) => {
              setConfirmpassword(e.target.value);
            }}
          />
        </Grid>
        <Grid margin="16px 0px 0px 0px">
          <Text>프로필 사진을 등록해보세요</Text>
          <Grid is_flex padding="0px 246px 0px 0px">
            <Grid>
              <Upload />
              <Image
                shape="rectangle"
                src={preview ? preview : require("../static/images/twit_logo.jpg")}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid margin="16px 0px 0px 0px">
          <Input
            type="text"
            multiLine
            rows={2}
            placeholder="나의 소개를 해볼까요?"
            _onChange={(e) => {
              setIntro(e.target.value);
            }}
          />
        </Grid>
      </Modal.Body>
      <Modal.Footer>
        <Grid is_flex padding="0px 0px 0px 250px">
          <DivButton is_center width="auto" _onClick={signup}>
            Sign Up
          </DivButton>
          <DivButton is_center width="auto" _onClick={onHide}>
            Cancel
          </DivButton>
        </Grid>
      </Modal.Footer>
    </Modal>
  );
};

export default SignupModal;
