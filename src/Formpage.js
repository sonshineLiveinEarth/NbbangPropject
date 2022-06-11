import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import { RoundBtn } from "./Btn";

const Formpage = (props) => {



  const [imagesrc, setImeageSrc] = useState("https://www.generationsforpeace.org/en/how-we-work/publications/empty/");

  const reader = new FileReader();


  const [category, setCategory] = useState();
  const [postTitle, setPostTitle] = useState();
  const [addres, setAddres] = useState();
  const [content, setContent] = useState();
  const [orderTime, setOrderTime] = useState();

  
  const addPost = () => {
    const contents = {
      category: category,
      postTitle: postTitle,
      content: content,
      addres: addres,
      orderTime: orderTime,
      imagesrc: imagesrc
    };
    console.log(contents)
  }
  


  //이미지 프리뷰
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
  //카테고리 기능
  const categorySelect = (e) => {
    setCategory(e.target.value);
  };

  //컨테이너
  return (
    <ThemeProvider theme={theme}>
      <Container>

        <Subtitle>
          N빵모임 만들기
        </Subtitle><br />


        <div>
          <Label>카테고리 선택</Label><br/>
          <button
            id="1"
            value={"전체"}
            className="categoryAll"
            onClick={categorySelect}
          >
            전체
          </button>
          <button
            id="2"
            value={"치킨"}
            className="categoryChicken"
            onClick={(e) => setCategory(e.target.value)}
          >
            치킨
          </button>
          <button
            id="3"
            value={"일식"}
            className="categoryJapanese"
            onClick={(e) => setCategory(e.target.value)}
          >
            일식
          </button>
          <button
            id="4"
            value={"중식"}
            className="categoryChinese"
            onClick={(e) => setCategory(e.target.value)}
          >
            중식
          </button>
          <button
            id="5"
            value={"한식"}
            className="categoryKorean"
            onClick={(e) => setCategory(e.target.value)}
          >
            한식
          </button>
          <br />
          <br />
        </div>


        <div className="postTitle">
          <Label>
            제목
          </Label><br/>
          <InputContainer
            type="text"
            placeholder="제목을 입력 해주세요!"
            onChange={(e) => {
              setPostTitle(e.target.value);
            }}
            value={postTitle}
          />
        </div><br />



        <div className='Image'>
          <Label>사진</Label><br/>
          
          <Imgveiw src={imagesrc} alt="" />
          <Filebox type="file" onChange={preveiw}/>
        </div><br />




        <div className='Address'>
          <Label>배달 받을 장소</Label><br/>
          <InputContainer

            type="text"
            placeholder="장소를 입력해주세요!"
            onChange={(e) => {
              setAddres(e.target.value);
            }}
            value={addres}
          />
        </div><br />



        <div className='Time'>
          <Label>주문 희망 시간</Label><br/>
          <input type="time"
            onChange={(e) => {
              setOrderTime(e.target.value);
            }} value={orderTime}></input>
            <button>설정완료</button>

        </div><br />
        <div className='Content'>
          <Label>
            N빵 내용
          </Label><br/>
          <InputContainer
            type="text"
            placeholder="내용을 입력해주세요!"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}></InputContainer>
        </div><br />
        <div>
          <SaveBtn className="saveBttn" onClick={addPost} text="저장하기">
            완료
          </SaveBtn>

        </div>

      </Container >
      <Background/>
    </ThemeProvider>
  )
};




const Container = styled.div`

    margin-top: 40px;
    padding: 0 30px;
    background-color: ${({ theme }) => theme.colors.BackgroundColor};
    flex-direction: column;
      justify-content: left;
  
    // theme.js에서 지정한 문자열을 이용 - @media screen and (min-width: 768px) {} 와 같은 뜻이 됩니다.
    // 짧게 쓰고 유지보수성을 높이기 위해 theme으로 등록했습니다.
    ${({ theme }) => theme.device.tablet} {
      margin-top: 60px;
      padding: 0 50px;
      background-color: ${({ theme }) => theme.colors.BackgroundColor};

    }
  
    ${({ theme }) => theme.device.desktop} {
      max-width: 1200px;
      margin: 60px auto 0 auto;
      background-color: ${({ theme }) => theme.colors.BackgroundColor};

    }
  `;
  const Subtitle = styled.h1`
  `
const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: left;
  font-weight: 600;
  margin-bottom: 5px;
  `;
const InputContainer = styled.input`
  
    padding: 5px 0;
    border: none;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 500;
    transition: border-color 300ms ease-in-out;
  
    
  `;

const Filebox = styled.input`
display: inline-block;
  padding: .5em .75em;
  color: #999;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: #fdfdfd;
  cursor: pointer;
  border: 1px solid #ebebeb;
  border-bottom-color: #e2e2e2;
  border-radius: .25em;
`
const Imgveiw = styled.img`
  background-position: center 30%;
  background-size: cover;
  `;

const SaveBtn = styled.button`
  ${RoundBtn};
  align-self: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;
const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.BackgroundColor};
`;

export default Formpage;
