import React, { useEffect, useState, useRef, useSelector } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../theme";
import { createPostApi } from "../redux/modules/post";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import DoneBtn from "../DoneBtn.png";

// 날짜 선택 라이브러리
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

import underLine from "./UnderLine.png";

const Write = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [category, setCategory] = useState("All");
  const [postTitle, setPostTitle] = useState();
  const [addres, setAddres] = useState();
  const [content, setContent] = useState();
  const [orderTime, setOrderTime] = useState("");
  const [PostingImage, setPostingImage] = useState();
  const [orderDate, setOrderDate] = useState(new Date());

  const Datee = orderDate.toString().split(" ");
  console.log(Datee);

  // 카테고리 선택
  const changeRadio = (e) => {
    if (e.target.checked) {
      setCategory(e.target.id);
    }
  };

  const reader = new FileReader();

  // const addPost = () => {
  //   //포스팅 작성한 시간 커스텀하기
  //   const now = new Date();
  //   const year = now.getFullYear();
  //   const month = Number(now.getMonth() + 1);
  //   const date = now.getDate();
  //   const hours = now.getHours();
  //   const minutes = now.getMinutes();

  //   const postDate = year + "." + month + "." + date;
  //   const postTime = hours + ":" + minutes;
  //   // 파이어베이스에 데이터 추가하기!
  //   dispatch(
  //     createPostApi({
  //       postCategory: category,
  //       postTitle: postTitle,
  //       postContent: content,
  //       postAddress: addres,
  //       postOrderTime: orderTime,
  // postOrderDate: postOrderDate,
  //       postImage: PostingImage.url,
  //       postTime: postTime,
  //       postDate: postDate,
  //     })
  //   );
  // };

  //이미지 프리뷰
  const preview = (e) => {
    reader.readAsDataURL(e.target.files[0]);
    return new Promise((resolve) => {
      reader.onload = () => {
        setPostingImage({ name: e.target.files[0], url: reader.result });
        resolve();
      };
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

        <Div3>
          <ImageFeild>
            {PostingImage && (
              <img
                src={PostingImage.url}
                alt="프로필 사진 미리보기"
                style={{
                  width: "300px",
                  height: "150px",
                  objectFit: "cover",
                  zIndex: "2",
                  borderRadius: "15px",
                }}
              />
            )}
            {!PostingImage && <span> 미리보기</span>}
          </ImageFeild>
          <FileBtn htmlfor="postImage">사진 선택</FileBtn>
          <InputFile onChange={preview} type="file" id="postImage" />
        </Div3>

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
            selected={orderDate}
            onChange={(date) => {
              setOrderDate(date);
            }}
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
            minDate={new Date()}
            value={orderDate}
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
        <AddBtn
          onClick={() => {
            navigate("/");
          }}
        >
          <AddBtnT src={DoneBtn} />
        </AddBtn>
      </Container>
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
`;
const Subtitle = styled.span`
  margin-top: 120px;
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
  background: #fafafa;
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
  margin-right: 10px;
`;

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

const Div3 = styled.div`
  max-width: 580px;
  width: 88%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
`;

const ImageFeild = styled.div`
  width: 300px;
  height: 150px;
  background-color: #e2e2e2;
  border: 1px solid #c7c7c7;
  border-radius: 15px;
  color: #c7c7c7;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
`;

/* 파일첨부 기본 디자인을 없애는 css */
const InputFile = styled.input`
  position: absolute;
  width: 80px;
  height: 40px;
  background-color: white;
  border: 1.5px solid black;
  border-radius: 15px;
  z-index: 2;
  font-size: 20px;
  margin-left: 316px;
  cursor: pointer;
  opacity: 0;
`;

const FileBtn = styled.button`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  position: relative;
  width: 80px;
  height: 40px;
  background-color: #2ac1bc;
  color: white;
  border: none;
  font-size: 14px;
  border-radius: 15px;
  margin-left: 16px;
  font-weight: bold;
  align-self: flex-start;
  padding-bottom: 5px;
  &:hover {
    opacity: 0.7;
  }
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

const Line = styled.img`
  width: 100%;
  height: auto;
  margin: 0px 0px 34px 0px;
`;

const DateWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 34px;
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

const AddBtn = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid black;
  position: fixed;
  bottom: 60px;
  right: 60px;
  z-index: 10;
  box-shadow: 0px 3px 20px #00000029;
  background-color: ${({ theme }) => theme.colors.mainColor};
  &:hover {
    box-shadow: 0px 3px 20px #00000050;
  }
  @media only screen and (max-width: 800px) {
    width: 70px;
    height: 70px;
    bottom: 40px;
    right: 40px;
    cursor: pointer;
  } ;
`;

const AddBtnT = styled.img`
  width: 80px;
  height: 80px;
  z-index: 11;
  @media only screen and (max-width: 800px) {
    width: 70px;
    height: 70px;
  } ;
`;

export default Write;
