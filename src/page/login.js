import React, { useEffect, useState, useRef, useSelector } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import { RoundBtn, RectangleBtn } from "../Btn";
import underLine from "../UnderLine.png";
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
      {/* <Wrap> */}
      <EmailBox className="Email">
        <Label>아이디</Label>
        <br />
        <InputContainer
          placeholder="아이디를 입력해주세요."
          type="text"
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
          value={userEmail}
        />
        <Line src={underLine} />
      </EmailBox>

      <div className="Password">
        <Label>비밀번호</Label>
        <br />

        <InputContainer
          placeholder="비밀번호를 입력해주세요."
          type="text"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
          value={userPassword}
        />
        <Line src={underLine} />
      </div>
      <BtnWrap>
        <LoginBtn
          className="s"
          text="로그인하기"
          border_radius="30px"
          onClick={_loginUser}
        >
          로그인하기
        </LoginBtn>
        <SignupBtn
          className="s"
          text="회원가입하기"
          border_radius="30px"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입하기
        </SignupBtn>
      </BtnWrap>
      {/* </Wrap> */}
    </SignupBox>
  );
}

const SignupBox = styled.div`
  max-width: 100vw;
  width: 90%;
  height: 100vh;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  /* margin: auto; */
`;

// const Wrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: left;
//   /* margin: auto; */
// `;

const EmailBox = styled.div`
  /* margin-top: 200px; */
  /* margin-left: 100px; */
`;

const InputContainer = styled.input`
  &[type="text"] {
    padding: 5px 0;
    border: none;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 500;
    transition: border-color 300ms ease-in-out;
    max-width: 400px;
    width: 90%;

    background: transparent;
    border: none;
    /* transform: opacity 1s 1; */
    margin-top: 20px;
    /* margin-left: 100px; */
  }
  &::placeholder-shown {
    color: #cecece;
  }
  &:focus {
    outline: none;
    /* transform: opacity 1s 1; */
  }
`;

const Label = styled.label`
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  margin-bottom: 30px;
  /* margin-left: 100px; */
`;

const Line = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  margin: 0px 0px 34px 0px;
  /* margin-left: 100px; */
`;

const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginBtn = styled.button`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  width: 400px;
  height: 40px;
  border-radius: 15px;
  padding-bottom: 4px;
  background-color: #2ac1bc;
  border: none;
  color: white;
  font-size: 14px;
  position: relative;
`;

const SignupBtn = styled.button`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  width: 400px;
  height: 40px;
  border-radius: 15px;
  padding-bottom: 4px;
  background-color: transparent;
  border: 1px solid #2ac1bc;
  color: #2ac1bc;
  font-size: 14px;
  position: relative;
  margin-top: 10px;
`;

export default Login;
