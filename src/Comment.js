import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadCommentApi } from "./redux/modules/comment";

const Comment = () => {
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.list);
  const card = comment_list?.data.existingComment;
  console.log(comment_list);
  
  return (
    <>
      <Wrap>
        <CommentInputWrap>
          <CommentInput placeholder="댓글을 남겨주세요" autoFocus />
          <CommentBtn>나도 끼기</CommentBtn>
        </CommentInputWrap>
        {card.map((list, index) => {
          return (
            <CommentBox key={index}>
              <ProfileImage profileImage={list.userProfileImage} />

              <CommentContentWrap>
                <CommentProfileWrap>
                  <div>
                    <Nickname>{list.userNickname}</Nickname>
                    <CommentDate>{list.commentDate}</CommentDate>
                  </div>
                  <DeleteBtn>삭제</DeleteBtn>
                </CommentProfileWrap>
                <CommentContent>{list.comment}</CommentContent>
              </CommentContentWrap>
            </CommentBox>
          );
        })}

        {/* <CommentBox>
          <ProfileImage />

          <CommentContentWrap>
            <CommentProfileWrap>
              <Nickname>먹보예유</Nickname>
              <CommentDate>22.06.11 19:35</CommentDate>
            </CommentProfileWrap>
            <CommentContent>저용 글이 길어지면 이렇게 되지요</CommentContent>
          </CommentContentWrap>
        </CommentBox> */}
      </Wrap>
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
  justify-content: center;
  margin: auto;
`;

const CommentInputWrap = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const CommentInput = styled.input`
  max-width: 520px;
  width: 90%;
  height: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 10px #0000000f;
  border-radius: 15px;
  border: none;
  padding-left: 16px;
  &::placeholder {
    font-size: 16px;
    color: #cecece;
  }
  &:focus {
    outline: 2px solid #2ac1bc;
  }
`;

const CommentBtn = styled.button`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  width: 84px;
  height: 50px;
  /* padding: 0px 10px 6px 10px; */
  margin-left: 16px;
  background-color: #2ac1bc;
  color: white;
  font-size: 16px;
  padding-bottom: 6px;
  border-radius: 15px;
  border: none;
  box-shadow: 5px 5px 10px #0000000f;
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 10px #00000020;
  }
`;

const CommentBox = styled.div`
  max-width: 100%;
  width: 95%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 5px 5px 10px #0000000f;
  border-radius: 15px;
  border: none;
  padding-left: 16px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ddd;
  border-radius: 50%;
  background-image: url(${(props) => props.profileImage});
  /* background-image: url(http://image.cine21.com/resize/cine21/person/2017/0421/17_13_30__58f9bf2aaf00b[W578-].jpg); */
  background-position: center 30%;
  background-size: cover;
  margin-left: 10px;
`;

const CommentProfileWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Nickname = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  padding-bottom: 4px;
`;

const CommentDate = styled.span`
  font-size: 14px;
  color: #a7a7a7;
  margin-left: 10px;
`;

const DeleteBtn = styled.button`
  font-size: 14px;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  color: #a7a7a7;
`;

const CommentContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 85%;
  margin-left: 20px;
`;

const CommentContent = styled.span`
  font-size: 16px;
  text-align: left;
  white-space: pre-line;
`;

export default Comment;
