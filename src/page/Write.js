import React, { useEffect, useState, useRef, useSelector } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import { RoundBtn, RectangleBtn } from "../Btn";
import { createPost } from "../redux/modules/post";
import { useDispatch } from "react-redux";
// 날짜 선택 라이브러리
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

import underLine from "./UnderLine.png";
import axios from "axios";

const Write = (props) => {
  // const dispatch = useDispatch();
  const [imagesrc, setImeageSrc] = useState("null");
  const [startDate, setStartDate] = useState(new Date());
  // 카테고리 선택
  const changeRadio = (e) => {
    if (e.target.checked) {
      setCategory(e.target.id);
    }
  };

  const reader = new FileReader();

  const [category, setCategory] = useState("All");
  const [postTitle, setPostTitle] = useState();
  const [addres, setAddres] = useState();
  const [content, setContent] = useState();
  const [orderTime, setOrderTime] = useState();

  const now = new Date();
  const year = now.getFullYear();
  const month = Number(now.getMonth() + 1);
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();


  const postDate = year + "." + month + "." + date;

  const postTime = hours + ":" + minutes;
  console.log(category);

  const addPost = (e) => {

    axios
      .post("http://localhost:5001/posts", {
        postCategory: category,
        postTitle: postTitle,
        postContent: content,
        postAddress: addres,
        postOrderTime: orderTime,
        postImage: imagesrc,
        postTime: postTime,
        postDate: postDate,
      })

      .then(function (response) {
        // response
      })
      .catch(function (error) {
        // 오류발생시 실행
      });

    console.log(addPost);
  };


  //이미지 프리뷰
  const preveiw = (e) => {
    reader.readAsDataURL(e.target.files[0]);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImeageSrc(reader.result);
        resolve();
      };
      console.log(e.target.files[0]);
    });
  };

  //컨테이너
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Subtitle>N빵모임 만들기</Subtitle>
        <Label>카테고리</Label>
        <Buttonbox>
          <CategoryLabel>
            <FormCheckLeft
              type="radio"
              id="All"
              name="radioButton"
              onChange={changeRadio}
              value={category}
              defaultChecked
            />
            <FormCheckText>전체</FormCheckText>
          </CategoryLabel>
          <CategoryLabel>
            <FormCheckLeft
              type="radio"
              id="Chicken"
              name="radioButton"
              onChange={changeRadio}
              value={category}
            />
            <FormCheckText>치킨</FormCheckText>
          </CategoryLabel>
          <CategoryLabel>
            <FormCheckLeft
              type="radio"
              id="Korean"
              name="radioButton"
              onChange={changeRadio}
              value={category}
            />
            <FormCheckText>한식</FormCheckText>
          </CategoryLabel>
          <CategoryLabel>
            <FormCheckLeft
              type="radio"
              id="Midnight"
              name="radioButton"
              onChange={changeRadio}
              value={category}
            />
            <FormCheckText>야식</FormCheckText>
          </CategoryLabel>
          <CategoryLabel>
            <FormCheckLeft
              type="radio"
              id="Chinese"
              name="radioButton"
              onChange={changeRadio}
              value={category}
            />
            <FormCheckText>중식</FormCheckText>
          </CategoryLabel>
        </Buttonbox>

        <Label>제목</Label>
        <InputContainer
          type="text"
          placeholder="제목을 적어주세요"
          onChange={(e) => {
            setPostTitle(e.target.value);
          }}
          value={postTitle}
        />
        <Line src={underLine} />
        <Label>사진</Label>

        <Imgveiw src={imagesrc} alt="" />
        <Filebox type="file" onChange={preveiw} />

        <Line src={underLine} />
        <Label>배달 받을 장소</Label>
        <InputContainer
          type="text"
          placeholder="배달 받을 구체적인 장소를 적어주세요"
          onChange={(e) => {
            setAddres(e.target.value);
          }}
          value={addres}
        />
        <Line src={underLine} />

        <Label>주문 희망 시간</Label>

        <DateWrap>
          <SDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
            minDate={new Date()}
          />
          <Timeinput
            type="time"
            onChange={(e) => {
              setOrderTime(e.target.value);
            }}
            value={orderTime}
          />
        </DateWrap>

        <Label>N빵 내용</Label>

        <InputContainer
          type="text"
          placeholder="공구 내용을 구체적으로 적어주세요"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
        ></InputContainer>
        <Line src={underLine} />

        <SaveBtn className="saveBttn" onClick={addPost} text="저장하기">
          완료
        </SaveBtn>
      </Container>
      <Background />
    </ThemeProvider>
  );
};

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
  margin-top: 34px;
`;
const Subtitle = styled.span`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  font-size: 40px;
  position: relative;
  top: -6px;
`;
const Label = styled.label`
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Buttonbox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const FormCheckText = styled.span`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  font-size: 16px;
  width: 80px;
  height: 34px;
  margin-top: 10px;
  margin-bottom: 30px;
  padding-bottom: 4px;
  border-radius: 15px;
  background: #fdfdfd;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: black;
  &:hover {
    background-color: white;
  }
`;

const FormCheckLeft = styled.input.attrs({ type: "radio" })`
  &:checked {
    display: inline-block;
    background: none;
    padding: 0px 10px;
    text-align: center;
    height: 35px;
    display: none;
  }
  &:checked + ${FormCheckText} {
    background: #2ac1bc;
    color: white;
  }
  display: none;
`;

const CategoryLabel = styled.label`
margin-right 10px;`;

const InputContainer = styled.input`
  &[type="text"] {
    padding: 5px 0;
    border: none;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 500;
    transition: border-color 300ms ease-in-out;
    width: 100%;
    background: transparent;
    border: none;
    /* transform: opacity 1s 1; */
  }
  &::placeholder-shown {
    color: #cecece;
  }
  &:focus {
    outline: none;
    /* transform: opacity 1s 1; */
  }
`;

const Filebox = styled.input`
  &[type="file"] {
    display: inline-block;
    padding: 0.5em 0.75em;
    color: #999;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    background-color: #fdfdfd;
    cursor: pointer;
    border: none;
    background: transparent;
    border-bottom-color: #e2e2e2;
    border-radius: 15px;
    max-width: 250px;
  }
`;
const Imgveiw = styled.img`
  background-position: center 30%;
  background-size: cover;
`;

const Timeinput = styled.input`
  &[type="time"] {
    border: none;
    color: #2a2c2d;
    font-size: 14px;
    font-family: helvetica;
    width: 160px;
    height: 40px;
    border-radius: 15px;
    border: none;
    color: black;
    padding-left: 16px;
    margin-left: -10px;
    font-weight: bold;
  }
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

const Line = styled.img`
  width: 100%;
  height: auto;
  margin: 0px 0px;
`;

const DateWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SDatePicker = styled(DatePicker)`
  width: 150px;
  height: 40px;
  border-radius: 15px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-left: -30px;
`;

export default Write;
