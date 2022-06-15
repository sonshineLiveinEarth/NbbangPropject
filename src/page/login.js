import React, { useEffect, useState, useRef, useSelector } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import { RoundBtn, RectangleBtn } from "../Btn";
import underLine from "./UnderLine.png";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/users";
import Signup from "./Signup";
import Cookies from "universal-cookie";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const _loginUser = () => {
    console.log("로그인 시도!");
    if (userEmail === "" || userPassword === "") {
      alert("빈칸을 다 채워주세요.");
      return;
    }
    dispatch(userActions.loginDB(userEmail, userPassword));

    const cookies = new Cookies();
    console.log(cookies);
    console.log(_loginUser);
    navigate("/");
  };

  return (
    <SignupBox className="SignupBox">
      <EmailBox className="Email">
        <div>아이디</div>
        <br />
        <input
          placeholder="아이디를 입력해주세요."
          type="text"
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
          value={userEmail}
        />
      </EmailBox>
      <br />

      <div className="Password">
        <div>비밀번호</div>
        <br />
        <input
          placeholder="비밀번호를 입력해주세요."
          type="text"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
          value={userPassword}
        />
      </div>
      <button
        className="s"
        text="로그인하기"
        border_radius="30px"
        onClick={_loginUser}
      >
        로그인하기
      </button>
      <button
        className="s"
        text="회원가입하기"
        border_radius="30px"
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입하기
      </button>
    </SignupBox>
  );
}

const SignupBox = styled.div`
  max-width: 650px;
  width: 90%;
  height: 100%;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
`;

const EmailBox = styled.div`
  margin-top: 100px;
`;

export default Login;
