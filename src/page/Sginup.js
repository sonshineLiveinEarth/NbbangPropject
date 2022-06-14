
import React, { useEffect, useState, useRef, useSelector } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import { RoundBtn, RectangleBtn } from "../Btn";
import underLine from "./UnderLine.png";







function Sginup() {
    const [userNickname, setUserNickname] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();
    const [userPasswordChek, setUserPasswordChek] = useState();
    const [regionGu, setRegionGu] = useState();
    const [regionDetail, setRegionDetail] = useState();
    const [userProfileImage, setUserProfileImage] = useState("https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg");
    const reader = new FileReader();

    <></>
    const users = {
        userNickname: userNickname,
        userEmail: userEmail,
        userPassword: userPassword,
        regionGu: regionGu,
        regionDetail: regionDetail,
        userProfileImage: userProfileImage

    };



    console.log(users);



    return (
        <>
            <div className="SginupBox">
                <div className="Title">
                    <div >닉네임</div><br />
                    <input
                        placeholder="닉네임을 입력해주세요."
                        type="text"
                        
                        onChange={(e) => {
                            setUserNickname(e.target.value);
                        }}
                        value={userNickname}
                    />
                </div><br />

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
                    <input
                        placeholder="비밀번호를 다시 입력해주세요."
                        type="text"
                        onChange={(e) => {
                            setUserPasswordChek(e.target.value);
                        }}
                        value={userPasswordChek}
                    />
                </div><br />


                <div className="Address">
                    <div>지역입력</div><br />
                    <input
                        placeholder="지역을 입력해주세요."
                        type="list"
                        defaultValue='regionGu'
                    />
                </div><br />

                <div className="ProfileImage">
                    <div>프로필 이미지</div><br />
                    <input
                        type="file"
                        defaultValue='userProfileImage' />

                </div>


            </div>
        </>
    );
}
export default Sginup;