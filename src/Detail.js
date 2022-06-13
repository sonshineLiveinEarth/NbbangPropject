import React, { useState } from "react";
import styled from "styled-components";
//이미지
import commentIcon from "./comment.png";

const Detail = () => {
  return (
    <>
      <Wrap>
        <PostDate>2022.06.11 19:35</PostDate>
        <PostTitle>뿌링클 시켜먹을 사람!</PostTitle>
        <CommentWrap>
          <CommentIcon src={commentIcon} />
          <CommentNum>10</CommentNum>
        </CommentWrap>
        <PostImage />
        <TimeWrap>
          <TimeBox />
          <TimeInfo>
            주문까지 <Time>40</Time>분
          </TimeInfo>
        </TimeWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100vw;
  max-width: 1920px;
  height: 100%;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 30%;

  /* @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 4fr;
    grid-gap: 10px;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 4fr 0.5fr;
    grid-gap: 0px;
  } */
`;

const PostDate = styled.span`
  font-size: 15px;
  color: #a7a7a7;
  margin-top: 20px;
  position: relative;
  top: 6px;
`;

const PostTitle = styled.span`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  font-size: 40px;
  position: relative;
  top: -6px;
`;

const CommentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CommentIcon = styled.img`
  width: 20px;
  height: auto;
`;

const CommentNum = styled.span`
  color: black;
  font-size: 14px;
  margin-left: 10px;
  font-weight: bold;
  margin-right: 24px;
`;

const PostImage = styled.div`
  width: 650px;
  height: 350px;
  margin-top: 20px;
  background-color: #ddd;
  border-radius: 20px;
  background-image: url(https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202112/27/a99042fd-9510-42e9-97d6-6ae45ad666fc.jpg);
  background-position: center 30%;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const TimeWrap = styled.div`
  position: absolute;
  right: 16px;
  top: 260px;
`;

const TimeBox = styled.div`
  width: 200px;
  height: 40px;
  background: #000000 0% 0% no-repeat padding-box;
  opacity: 0.44;
  border-radius: 6px;
  margin: 16px 24px 0px 0px;
  position: relative;
`;

const TimeInfo = styled.span`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  color: white;
  position: relative;
  top: -56px;
  font-size: 30px;
  opacity: 1;
  margin-right: 24px;
`;

const Time = styled.span`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  color: #ffcf00;
  font-size: 30px;
  opacity: 1;
`;

export default Detail;
