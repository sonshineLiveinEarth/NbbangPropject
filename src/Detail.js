import React, { useState } from "react";
import styled from "styled-components";
//이미지
import commentIcon from "./comment.png";
import underLine from "./UnderLine.png";
//  js파일
import Comment from "./Comment";

const Detail = () => {
  return (
    <>
      <Wrap>
        <Div>
          <PostDate>22.06.11 19:35</PostDate>
          <EditBtn>수정</EditBtn>
        </Div>

        <PostTitle>뿌링클 시켜먹을 사람!</PostTitle>
        <CommentInfo>
          <CommentIcon src={commentIcon} />
          <CommentNum>10</CommentNum>
        </CommentInfo>
        <PostImage />
        <TimeWrap>
          <TimeBox />
          <TimeInfo>
            주문까지
            <Time>
              40<TimeLabel>분</TimeLabel>
            </Time>
          </TimeInfo>
        </TimeWrap>
        <PostAdress>효창동 놀이터 앞에서 모여요</PostAdress>
        <PostContent>
          5명 모이면 마감합니다. 한 명당 배달비 1천원씩 내요. 글자가 길어지면
          이렇게 보이지요. 5명 모이면 마감합니다. 한 명당 배달비 1천원씩 내요.
          글자가 길어지면 이렇게 보이지요.
        </PostContent>
        <Line src={underLine} />
      </Wrap>
      <Comment />
    </>
  );
};

const Wrap = styled.div`
  max-width: 650px;
  width: 95%;
  height: 100%;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
  margin-top: 34px;

  /* @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 4fr;
    grid-gap: 10px;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 4fr 0.5fr;
    grid-gap: 0px;
  } */
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const PostDate = styled.span`
  font-size: 16px;
  color: #a7a7a7;
  position: relative;
  top: 6px;
`;

const EditBtn = styled.button`
  font-size: 16px;
  position: relative;
  top: 6px;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  color: #a7a7a7;
`;

const PostTitle = styled.span`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  font-size: 40px;
  position: relative;
  top: -6px;
`;

const CommentInfo = styled.div`
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
`;

const PostImage = styled.div`
  width: 100%;
  height: 350px;
  margin-top: 20px;
  background-color: #ddd;
  border-radius: 20px;
  background-image: url(https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202112/27/a99042fd-9510-42e9-97d6-6ae45ad666fc.jpg);
  background-position: center 30%;
  background-size: cover;
  /* position: relative; */
  word-break: break-all;
  /* display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center; */
`;

const TimeWrap = styled.div`
  position: absolute;
  /* text-align: right; */
`;

const TimeBox = styled.div`
  max-width: 160px;
  width: 95%;
  height: 40px;
  background: #000000 0% 0% no-repeat padding-box;
  opacity: 0.44;
  border-radius: 6px;
  margin: -190px 20px 0px 470px;
  position: relative;
`;

const TimeInfo = styled.span`
  max-width: 220px;
  width: 95%;
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  color: white;
  font-size: 24px;
  opacity: 1;
  bottom: 150px;
  right: -140px;
  justify-content: flex-end;
  position: absolute;
`;

const Time = styled.span`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  color: #ffcf00;
  font-size: 24px;
  opacity: 1;
  position: absolute;
  margin-left: 8px;
`;

const TimeLabel = styled.span`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  color: #ffcf00;
  font-size: 24px;
  color: white;
  position: absolute;
`;

const PostAdress = styled.span`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  font-size: 26px;
  margin-top: 20px;
`;

const PostContent = styled.span`
  font-size: 16px;
  margin-top: 20px;
  white-space: pre-line;
  text-align: left;
`;

const Line = styled.img`
  width: 100%;
  height: auto;
  margin: 36px 0px;
`;

export default Detail;
