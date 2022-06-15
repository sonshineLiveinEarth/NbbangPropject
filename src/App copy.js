import React, { useState, useRef } from "react";
import './App.css';
import styled, { ThemeProvider } from "styled-components";



import { Route, Switch } from "react-router-dom";
// import FormPage from "./FormPage";

import theme from "./theme";


function App() {
  const [imagesrc,setImeageSrc] = useState("https://www.generationsforpeace.org/en/how-we-work/publications/empty/");
  const reader = new FileReader();

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
  return (
    <ThemeProvider theme={theme}>
      <Container>
      
        <div>
          <div className="Subtitle">
            게시글 등록
          </div><br />
          <Label>카테고리 선택</Label>
          <button>치킨</button>
          <button>일식</button>
          <button>중식</button>
          <button>한식</button>
          <br />
          <br />
        </div>
        <div className="Postname">
          <Label>
            글제목
          </Label>
          <InputContainer type="text"></InputContainer>
        </div><br />
        <div className='Image'>
          <Label>사진</Label>
          <input type="file" onChange={preveiw}></input>
          <img src={imagesrc} alt=""/>
        </div><br />
        <div className='Address'>
          <Label>정확한 주소</Label>
          <input type="text"></input>
        </div><br />
        <div className='nowTime'>
          <Label>주문희망 시간</Label>
          <input type="date"></input><input  type="time"  ></input>
          
          <input type="submit" value="Submit" />
        </div><br />
        <div className='Content'>
          <Label>
            내용
          </Label>
          <InputContainer type="text"></InputContainer>
        </div>

      </Container >
    </ThemeProvider>
  )

}

const Container = styled.div`
  margin-top: 40px;
  padding: 0 30px;
  flex-direction: column;
    justify-content: center;

  // theme.js에서 지정한 문자열을 이용 - @media screen and (min-width: 768px) {} 와 같은 뜻이 됩니다.
  // 짧게 쓰고 유지보수성을 높이기 위해 theme으로 등록했습니다.
  ${({ theme }) => theme.device.tablet} {
    margin-top: 60px;
    padding: 0 50px;
  }

  ${({ theme }) => theme.device.desktop} {
    max-width: 1200px;
    margin: 60px auto 0 auto;
  }
`;
const Label = styled.label`
font-size: ${({ theme }) => theme.fontSizes.sm};
font-weight: 600;
margin-bottom: 5px;
`;
const InputContainer = styled.input`
height: 28px;
  padding: 5px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.mint};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  transition: border-color 300ms ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.colors.mainColor};
  }
`;
export default App;
