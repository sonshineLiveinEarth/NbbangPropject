
import React, {useEffect, useState, useRef, useSelector } from "react";







const Sginup = () =>{


<></>



return (
    <>
    <div className="SginupBox">
        <div className="Title">
            <div >닉네임</div><br />
            <input
                placeholder="닉네임을 입력해주세요."
                type="text"
            />
        </div><br />

        <div className="Email">
            <div>아이디</div><br />
            <input
                placeholder="아이디를 입력해주세요."
                type="text"
            />
        </div><br />

        <div className="Password">
            <div>비밀번호</div><br />
            <input
                placeholder="비밀번호를 입력해주세요."
                type="text"
            />
            <input
                placeholder="비밀번호를 다시 입력해주세요."
                type="text"
            />
        </div><br />


        <div className="Address">
            <div>지역입력</div><br />
            <input
                placeholder="시/도 를 입력해주세요."
                type="list"
                defaultValue='regionSi'
            />
            <input
                placeholder="나머지 지역을 입력해주세요."
                type="list"
                defaultValue='regionGu'
            />
        </div><br/>

        <div className="ProfileImage">
            <div>프로필 이미지</div><br/>
            <input
            type="file"
            defaultValue='userProfileImage'/>

        </div>


    </div>
    </>
);
}
export default Sginup;