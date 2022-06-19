import React, { useEffect, useState, useRef, useSelector } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import { RoundBtn, RectangleBtn } from "../Btn";
import underLine from "./UnderLine.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/users";

function Signup() {
  const dispatch = useDispatch();

  const [nickname, setUserNickname] = useState("");
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const [passwordChek, setUserPasswordChek] = useState("");
  const [regionGu, setRegionGu] = useState("");
  const [regiondetail, setRegionDetail] = useState("");
  const [userProfileImage, setFiles] = useState("");

  let ProfImage = document.getElementById("userimage");

  // const reader = new FileReader();
  const reader = new FileReader();

  const handleSubmit = (e) => {
    if (
      nickname === "" ||
      email === "" ||
      password === "" ||
      passwordChek === "" ||
      regionGu === "" ||
      regiondetail === ""
    ) {
      alert("빈칸을 다 채워주세요.");
      return;
    } else if (password !== passwordChek) {
      alert("비밀번호와 비밀번호 확인이 서로 다릅니다. 다시 적어주세요.");
      return;
    }
    e.preventDefault();
    let frm = new FormData();

    frm.append("userNickname", nickname);
    frm.append("userEmail", email);
    frm.append("userPassword", password);
    frm.append("confirmPassword", passwordChek);
    frm.append("regionGu", regionGu);
    frm.append("regionDetail", regiondetail);
    // const variables = [{
    //     userNickname: nickname,
    //     userEmail: email,
    //     userPassword: password,
    //     confirmPassword: passwordChek,
    //     regionGu: regionGu,
    //     regionDetail: regiondetail,

    //   }]
    frm.append("userProfileImage", ProfImage.files[0]);
    console.log(ProfImage.files[0]);

    axios({
      method: "post",
      url: "http://3.39.226.20/api/signup",
      data: frm,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log(frm);
    setFiles([]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="SignupBox">
        <Title className="Title">
          <Label>닉네임</Label>
          <br />
          <InputContainer
            placeholder="닉네임을 입력해주세요."
            type="text"
            onChange={(e) => {
              setUserNickname(e.target.value);
            }}
            value={nickname}
          />
          <Line src={underLine} />
        </Title>
        <br />

        <div className="Email">
          <Label>아이디</Label>
          <br />
          <InputContainer
            placeholder="아이디를 입력해주세요."
            type="text"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            value={email}
          />
          <Line src={underLine} />
        </div>
        <br />

        <div className="Password">
          <Label>비밀번호</Label>
          <br />
          <InputContainer
            placeholder="비밀번호를 입력해주세요."
            type="password"
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            value={password}
          />
          <Line src={underLine} />
          <br />
          <InputContainer2
            placeholder="비밀번호를 다시 입력해주세요."
            type="password"
            onChange={(e) => {
              setUserPasswordChek(e.target.value);
            }}
            value={passwordChek}
          />
          <Line src={underLine} />
        </div>
        <br />

        <div className="Address">
          <Label>지역입력</Label>
          <br />

          <Selec onChange={(e) => setRegionGu(e.target.value)}>
            <option value="">지역을 선택하세요!</option>
            <option value="강남구">강남구</option>
            <option value="강동구">강동구</option>
            <option value="동대문구">동대문구</option>
            <option value="성북구">성북구</option>
            <option value="송파구">송파구</option>
            <option value="용산구">용산구</option>
          </Selec>
          <SelecBox
            placeholder="상세지역을 입력해주세요"
            onChange={(e) => {
              setRegionDetail(e.target.value);
            }}
          />
        </div>
        <br />

        <div className="ProfileImage">
          <Label>프로필 이미지</Label>
          <br />
          <input
            id="userimage"
            type="file"
            name="photo"
            accept="image/*,audio/*,video/mp4,video/x-m4v,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
            onChange={setFiles}
          ></input>
        </div>

        <SigninBtn
          className="s"
          text="저장하기"
          border_radius="30px"
          onClick={handleSubmit}
        >
          가입하기
        </SigninBtn>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  max-width: 650px;
  width: 90%;
  height: 100vh;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  margin: auto;
`;

const Title = styled.div`
  margin-top: 100px;
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
    margin-top: 20px;
  }
  &[type="password"] {
    padding: 5px 0;
    border: none;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 500;
    transition: border-color 300ms ease-in-out;
    max-width: 400px;
    width: 90%;

    background: transparent;
    border: none;
    margin-top: 20px;
  }
  &::placeholder-shown {
    color: #cecece;
  }
  &:focus {
    outline: none;
    /* transform: opacity 1s 1; */
  }
`;

const InputContainer2 = styled.input`
  &[type="password"] {
    padding: 5px 0;
    border: none;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 500;
    transition: border-color 300ms ease-in-out;
    max-width: 400px;
    width: 90%;

    background: transparent;
    border: none;
  }
  &::placeholder-shown {
    color: #cecece;
  }
  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Line = styled.img`
  max-width: 400px;
  width: 100%;
  height: auto;
  margin: 0px 0px 34px 0px;
  /* margin-left: 100px; */
`;

const Selec = styled.select`
  margin-right: 20px;
  width: 170px;
  background-color: white;
  height: 30px;
  border-radius: 10px;
  border: none;
  margin-top: 20px;
  padding-left: 10px;
`;

const SelecBox = styled.input`
  margin-right: 20px;
  width: 230px;
  background-color: white;
  height: 30px;
  border-radius: 10px;
  border: none;
  margin-top: 20px;
  padding-left: 10px;
`;

const SigninBtn = styled.button`
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
  margin-top: 30px;
`;

export default Signup;
