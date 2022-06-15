import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadPostsApi } from "../redux/modules/post";

//이미지
import commentIcon from "../comment.png";
import underLine from "../UnderLine.png";
//  js파일
import Comment from "../Comment";

const Detail = (list) => {
  const postId = useParams();
  const dispatch = useDispatch();

  const card = useSelector((state) => state.post.list);
  const posting = card[postId.postId];

  React.useEffect(() => {
    dispatch(loadPostsApi());
  }, []);

  console.log(card[postId.postId]);

  return (
    <>
      <Wrap>
        <Div>
          <PostDate>{posting.postDate}</PostDate>
          <EditBtn>수정</EditBtn>
        </Div>

        <PostTitle>{posting.postTitle}</PostTitle>
        <CommentInfo>
          <CommentIcon src={commentIcon} />
          <CommentNum>10</CommentNum>
        </CommentInfo>
        <PostImage postImage={posting.postImage} />
        <TimeWrap>
          <TimeBox />
          <TimeInfo>
            주문까지
            <Time>
              40<TimeLabel>분</TimeLabel>
            </Time>
          </TimeInfo>
        </TimeWrap>
        <PostAdress>{posting.postAddress}에서 모여요</PostAdress>
        <PostContent>{posting.postContent}</PostContent>
        <Nickname>by {posting.userNickname}</Nickname>
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

const Nickname = styled.span`
  color: black;
  font-size: 16px;
  text-align: left;
  margin-right: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

const PostDate = styled.span`
  font-size: 14px;
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
  cursor: pointer;
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
  background-image: url(${(props) => props.postImage});
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
  margin: -200px 20px 0px 470px;
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
  bottom: 160px;
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
