import React, { useEffect, useState, useRef, useSelector } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import { RoundBtn, RectangleBtn } from "../Btn";
import underLine from "./UnderLine.png";
import { useDispatch } from "react-redux"
import { actionCreators as userActions } from "../redux/modules/users";


function Login() {
    const dispatch = useDispatch();


    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const _loginUser = () => {
        console.log("로그인 시도!")
        if (userEmail === '' || userPassword === '') {
            alert('빈칸을 다 채워주세요.');
            return;
        }
        dispatch(userActions.loginDB(userEmail, userPassword));
    };
    
    console.log(_loginUser);


    return (
        <div className="SginupBox">
            <div className="Email">
                <div>아이디</div><br />
                <input
                    placeholder="아이디를 입력해주세요."
                    type="text"
                    onChange={(e) => {
                        setUserEmail(e.target.value);
                    }}
                    value={userEmail}
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
                    value={userPassword}
                />

            </div>
            <button className="s" text="로그인하기" border_radius="30px"
                    onClick={
                        _loginUser
                    }>
                    로그인하기
                </button>
        </div>
    )
}


export default Login; 