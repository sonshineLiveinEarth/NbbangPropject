import React, { useEffect, useState, useRef, useSelector } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import { RoundBtn, RectangleBtn } from "../Btn";
import underLine from "./UnderLine.png";


function Login() {

    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();

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
        </div>
    )
}


export default Login; 