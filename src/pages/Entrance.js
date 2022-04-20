import React, { useState } from "react";
import { Text, DivButton, TextBox, Grid, HrBox } from "../elements/Index";
import SignupModal from "../components/SignupModal";
import LoginModal from "../components/LoginModal";
import { Modal, Button } from "react-bootstrap";

const Entrance = () => {
  const [signupModalOn, setSignupModalOn] = useState(false);
  const [loginModalOn, setLoginModalOn] = useState(false);
  // console.log(loginModalOn);
  return (
    <div>
      <>
        <SignupModal show={signupModalOn} onHide={() => setSignupModalOn(false)} />
      </>
      <>
        <LoginModal show={loginModalOn} onHide={() => setLoginModalOn(false)} />
      </>

      <Grid is_middle>
        <Grid margin="0px 0px 50px 0px">
          <div>
            <img
              src={require("../static/images/twit_logo.jpg")}
              alt="logo"
              width="90px"
              height="70px"
            />
          </div>
          <div style={{ margin: "50px 0px 0px 0px" }}>
            <Text size="64px">지금 일어나고 있는 일</Text>
          </div>
          <div style={{ margin: "50px 0px 0px 0px" }}>
            <Text size="31px">오늘 트위터에 가입하세요.</Text>
          </div>
          <div>
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

            <DivButton _onClick={() => setSignupModalOn(true)}>
              <TextBox is_center>
                <Text is_center>휴대폰 번호나 이메일 주소로 가입하기</Text>
              </TextBox>
            </DivButton>

            <DivButton cursor="default" border="none">
              <Text size="11px" fontWeight="400px">
                by singing up, you agree to the{" "}
                <a
                  href="#!"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <span style={{ color: "#1d9bf0" }}>Terms of Service</span>
                </a>{" "}
                and{" "}
                <a
                  href="#!"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <span style={{ color: "#1d9bf0" }}>Privacy Policy</span>
                </a>
                , including{" "}
                <a
                  href="#!"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <span style={{ color: "#1d9bf0" }}>Cookie Use</span>
                </a>
                .
              </Text>
            </DivButton>
            <Grid margin="40px 0 0 0">
              <DivButton border="none" display="block">
                <Text size="17px">이미 트위터에 가입하셨나요?</Text>
              </DivButton>
              <DivButton _onClick={() => setLoginModalOn(true)}>
                <TextBox is_center>
                  <Text is_center>로그인</Text>
                </TextBox>
              </DivButton>
            </Grid>
          </div>
        </Grid>

        <Grid>
          <div>
            <img src={require("../static/images/lohp_1302x955.png")} alt="svg" />
          </div>
        </Grid>
      </Grid>
      <Grid padding="0px 16px" margin="16px 0px">
        <a
          href="#!"
          style={{
            textDecoration: "none",
            margin: "4px 0px",
            padding: "0px 16px 0px 0px",
          }}
        >
          <Text size="13px" color="#71767b">
            소개
          </Text>
        </a>
        <a
          href="#!"
          style={{
            textDecoration: "none",
            margin: "4px 0px",
            padding: "0px 16px 0px 0px",
          }}
        >
          <Text size="13px" color="#71767b">
            고객센터
          </Text>
        </a>
        <a
          href="#!"
          style={{
            textDecoration: "none",
            margin: "4px 0px",
            padding: "0px 16px 0px 0px",
          }}
        >
          <Text size="13px" color="#71767b">
            이용약관
          </Text>
        </a>
        <a
          href="#!"
          style={{
            textDecoration: "none",
            margin: "4px 0px",
            padding: "0px 16px 0px 0px",
          }}
        >
          <Text size="13px" color="#71767b">
            개인정보 처리방침
          </Text>
        </a>
        <a
          href="#!"
          style={{
            textDecoration: "none",
            margin: "4px 0px",
            padding: "0px 16px 0px 0px",
          }}
        >
          <Text size="13px" color="#71767b">
            쿠키 정책
          </Text>
        </a>
        <a
          href="#!"
          style={{
            textDecoration: "none",
            margin: "4px 0px",
            padding: "0px 16px 0px 0px",
          }}
        >
          <Text size="13px" color="#71767b">
            접근성
          </Text>
        </a>
        <a
          href="#!"
          style={{
            textDecoration: "none",
            margin: "4px 0px",
            padding: "0px 16px 0px 0px",
          }}
        >
          <Text size="13px" color="#71767b">
            광고 정보
          </Text>
        </a>
        <a
          href="#!"
          style={{
            textDecoration: "none",
            margin: "4px 0px",
            padding: "0px 16px 0px 0px",
          }}
        >
          <Text size="13px" color="#71767b">
            블로그
          </Text>
        </a>
        <a
          href="#!"
          style={{
            textDecoration: "none",
            margin: "4px 0px",
            padding: "0px 16px 0px 0px",
          }}
        >
          <Text size="13px" color="#71767b">
            상태
          </Text>
        </a>
        <a
          href="#!"
          style={{
            textDecoration: "none",
            margin: "4px 0px",
            padding: "0px 16px 0px 0px",
          }}
        >
          <Text size="13px" color="#71767b">
            채용
          </Text>
        </a>
        <a
          href="#!"
          style={{
            textDecoration: "none",
            margin: "4px 0px",
            padding: "0px 16px 0px 0px",
          }}
        >
          <Text size="13px" color="#71767b">
            브랜드 리소스
          </Text>
        </a>
        <a
          href="#!"
          style={{
            textDecoration: "none",
            margin: "4px 0px",
            padding: "0px 16px 0px 0px",
          }}
        >
          <Text size="13px" color="#71767b">
            광고
          </Text>
        </a>
        <a
          href="#!"
          style={{
            textDecoration: "none",
            margin: "4px 0px",
            padding: "0px 16px 0px 0px",
          }}
        >
          <Text size="13px" color="#71767b">
            마케팅
          </Text>
        </a>
        <a
          href="#!"
          style={{
            textDecoration: "none",
            margin: "4px 0px",
            padding: "0px 16px 0px 0px",
          }}
        >
          <Text size="13px" color="#71767b">
            비즈니스용 트위터
          </Text>
        </a>
        <a
          href="#!"
          style={{
            textDecoration: "none",
            margin: "4px 0px",
            padding: "0px 16px 0px 0px",
          }}
        >
          <Text size="13px" color="#71767b">
            개발자
          </Text>
        </a>
        <a
          href="#!"
          style={{
            textDecoration: "none",
            margin: "4px 0px",
            padding: "0px 16px 0px 0px",
          }}
        >
          <Text size="13px" color="#71767b">
            디렉터리
          </Text>
        </a>
        <a
          href="#!"
          style={{
            textDecoration: "none",
            margin: "4px 0px",
            padding: "0px 16px 0px 0px",
          }}
        >
          <Text size="13px" color="#71767b">
            설정
          </Text>
        </a>
        <div>
          <Text size="13px" color="#71767b">
            © 2022 twit, team 2
          </Text>
        </div>
      </Grid>
    </div>
  );
};

export default Entrance;
