
import React, { useEffect, useState, useRef, useSelector } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import { RoundBtn, RectangleBtn } from "../Btn";
import underLine from "./UnderLine.png";
import axios from "axios";
import { useDispatch } from "react-redux"
import { actionCreators as userActions } from "../redux/modules/users"






function Signup() {
    const dispatch = useDispatch();


    const [nickname, setUserNickname] = useState("");
    const [email, setUserEmail] = useState("");
    const [password, setUserPassword] = useState("");
    const [passwordChek, setUserPasswordChek] = useState("");
    const [regionGu, setRegionGu] = useState("");
    const [regiondetail, setRegionDetail] = useState("");
    const [ProfileImage, setImeageSrc] = useState("https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg");
    // const reader = new FileReader();
    const reader = new FileReader();



    // <></>
    const _signup = () => {
        console.log("보낸다!")
        if (nickname === '' || email === '' || password === '' || passwordChek === '' || regionGu === '' || regiondetail === '') {
            alert('빈칸을 다 채워주세요.');
            return;
        } else if (password !== passwordChek) {
            alert('비밀번호와 비밀번호 확인이 서로 다릅니다. 다시 적어주세요.');
            return;
        }
        dispatch(userActions.SignDB(nickname, email, password, regionGu, regiondetail, ProfileImage));
        console.log("보낸다!")
    };
    const preveiw = (e) => {
        reader.readAsDataURL(e.target.files[0])
        return new Promise((resolve) => {
            reader.onload = () => {
                setImeageSrc(reader.result);
                resolve();
            };
            console.log(e.target.files[0])

        });

    };
    // console.log(users);





    return (
        <ThemeProvider theme={theme}>
            <Container className="SignupBox">
                <Title className="Title">
                    <div >닉네임</div><br />
                    <input
                        placeholder="닉네임을 입력해주세요."
                        type="text"

                        onChange={(e) => {
                            setUserNickname(e.target.value);
                        }}
                        value={nickname}
                    />
                </Title><br />

                <div className="Email">
                    <div>아이디</div><br />
                    <input
                        placeholder="아이디를 입력해주세요."
                        type="text"
                        onChange={(e) => {
                            setUserEmail(e.target.value);
                        }}
                        value={email}
                    />
                </div><br />

                <div className="Password">
                    <div>비밀번호</div><br />
                    <input
                        placeholder="비밀번호를 입력해주세요."
                        type="text"
                        onChange={(e) => {
                            setUserPassword(e.target.value);
                        }}
                        value={password}
                    /><br />
                    <input
                        placeholder="비밀번호를 다시 입력해주세요."
                        type="text"
                        onChange={(e) => {
                            setUserPasswordChek(e.target.value);
                        }}
                        value={passwordChek}
                    />
                </div><br />


                <div className="Address">
                    <div>지역입력</div><br />

                    <select onChange={(e) => setRegionGu(e.target.value)}>
                        <option value="">지역을 선택하세요!</option>
                        <option value="강남구">강남구</option>
                        <option value="강동구">강동구</option>
                        <option value="동대문구">동대문구</option>
                        <option value="성북구">성북구</option>
                        <option value="송파구">송파구</option>
                        <option value="용산구">용산구</option>

                    </select>
                    <input
                        placeholder="상세지역을 입력해주세요"
                        onChange={(e) => {
                            setRegionDetail(e.target.value);
                        }} />
                </div><br />

                <div className="ProfileImage">
                    <div>프로필 이미지</div><br />
                    <input
                        type="file" onChange={preveiw}></input>

                </div>

                <button className="s" text="저장하기" border_radius="30px"
                    onClick={
                        _signup
                    }>
                    가입하기
                </button>


            </Container>
            </ThemeProvider>
        
    );
}

const Container = styled.div`
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

const Title = styled.div`
margin-top: 100px;
`


export default Signup;