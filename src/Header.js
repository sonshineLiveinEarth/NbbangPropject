import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 이미지파일
import img from "./Nlogo.png";
import LogoutImg from "./Logout.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderBack>
        <LogoWrap>
          <Logo
            src={img}
            onClick={() => {
              navigate("/");
            }}
          />
          <Region>경기도 수원시 행궁동</Region>
        </LogoWrap>
        <RightWrap>
          <LoginWrap
            onClick={() => {
              navigate("/login");
            }}
          >
            <LogoutIcon src={LogoutImg} />
            <LogoutText>시작하기</LogoutText>
          </LoginWrap>
          <ProfileWrap>
            <ProfileImage />
            <Nickname>먹보님</Nickname>
          </ProfileWrap>
        </RightWrap>
      </HeaderBack>
      <Background />
    </>
  );
};

const HeaderBack = styled.div`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  width: 100%;
  height: 10vh;
  color: white;
  background-color: ${({ theme }) => theme.colors.mainColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 0px 0px 28px 28px;
  box-shadow: 0px 3px 20px #0000002f;
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  margin-right: 20px;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  justify-content: center;
  margin-left: 5vw;
`;

const Region = styled.span`
  width: 200px;
  height: auto;
  margin-right: 20px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const RightWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 5vw;
`;

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 3vw;
  cursor: pointer;
`;

const LogoutIcon = styled.img`
  width: 20px;
  height: auto;
`;

const LogoutText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  opacity: 0.67;
`;

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  justify-content: center;
  margin-right: 3vw;
`;

const ProfileImage = styled.div`
  z-index: 10;
  width: 44px;
  height: 44px;
  background-color: #ddd;
  border-radius: 50%;
  /* background-image: url(${(props) => props.profileImage}); */
  background-image: url(http://image.cine21.com/resize/cine21/person/2017/0421/17_13_30__58f9bf2aaf00b[W578-].jpg);
  background-position: center 30%;
  background-size: cover;
`;

const Nickname = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.BackgroundColor};
`;

export default Header;
