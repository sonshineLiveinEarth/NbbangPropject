import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadCommentApi } from "../redux/modules/comment";
import { loadPostApi } from "../redux/modules/post";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

//이미지
import commentIcon from "../comment.png";
import underLine from "../UnderLine.png";
//  js파일
import Comment from "../Comment";

const Detail = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies();


  // console.log(params.id.split("."));
  // const index = params.id.split(".")[1];
  const postIdnum = Number(params.id);
  console.log(typeof postIdnum, postIdnum);

  const comment_list = useSelector((state) => state.comment.list);
  const card_list = useSelector((state) => state.post.list);

  const is_login = cookies.get("token");
  const userEmail = cookies.get("userEmail");
  
  const card = useSelector((state) => state.post.list);

  console.log(card.posts);
  console.log(params.id.split("."));
  const index = params.id.split(".")[1];
  // const postIdnum = Number(params.id.split(".")[0]);
  // const posting = card.posts[index];
  console.log(posting.postId);


  React.useEffect(() => {
    dispatch(loadPostApi(postIdnum));
    dispatch(loadCommentApi(postIdnum));
  }, []);

  const posting = comment_list.detail;
  const comment = comment_list.existingComment;
  console.log(comment_list.detail);
  console.log(comment);

  // const comment_list = comment.data.existingComment
  // 현재시간
  // const today = new Date();
  // const stringToday = today.toString().split(" ")[4];
  // const todayHour = stringToday.split(":")[0];
  // const todayMin = stringToday.split(":")[1];

  // 주문희망시간
  // const orderHour = Number(card.posts.postOrderTime.split(":")[0]);
  // const orderMin = Number(card.posts.postOrderTime.split(":")[1]);
  // console.log(card.posts.postOrderTime);
  // const leftHour = (orderHour - todayHour) * 60;
  // const leftMin = orderMin - todayMin;
  // // 주문까지 남은시간
  // const leftTime = leftHour + leftMin;

  // const TimeLabel = posting.postOrderTime.split(":");

  if (!is_login && !userEmail) {
    return (
      <Div margin="100px 0px" padding="16px" center>
        <Div size="32px" bold>
          앗! 잠깐!
        </Div>
        <Div size="16px">로그인 후에만 글을 쓸 수 있어요!</Div>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인 하러가기
        </button>
      </Div>
    );
  } else {
  return (
    <>
      {posting !== undefined ? (
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
            <TimeWrap></TimeWrap>
            <PostAdress>{posting.postAddress}에서 모여요</PostAdress>
            <div>
              <PostContent>주문 예정일 </PostContent>
              <PostContentT>{posting.postOrderDate} </PostContentT>
            </div>
            <div>
              <PostContent>주문 예정 시간 </PostContent>
              <PostContentT>
                {/* {TimeLabel[0]}시 {TimeLabel[1]}분 */}
              </PostContentT>
            </div>

            <PostContent>{posting.postContent}</PostContent>
            <NicknameC>글쓴이 {posting.userNickname}</NicknameC>
            <Line src={underLine} />
          </Wrap>
        </>
      ) : null}

      <WrapC>
        <CommentInputWrap>
          <CommentInput placeholder="댓글을 남겨주세요" autoFocus />
          <CommentBtn>나도 끼기</CommentBtn>
        </CommentInputWrap>
        {comment.map((list, index) => {
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
      </WrapC>
    </>
  );
}
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

  /* @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 4fr;
    grid-gap: 10px;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 4fr 0.5fr;
    grid-gap: 0px;
  } */
`;

const Div4 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 300px;
  z-index: 100;
  background-color: green;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 120px;
`;

const Nickname = styled.span`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  color: black;
  font-size: 16px;
  text-align: left;
  margin-right: 16px;
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
  max-width: 170px;
  width: 95%;
  height: 40px;
  background: #000000 0% 0% no-repeat padding-box;
  opacity: 0.44;
  border-radius: 6px;
  margin: -150px 20px 0px 450px;
  position: relative;
  @media only screen and (max-width: 600px) {
    margin: -200px 20px 0px 350px;
  }

  @media only screen and (max-width: 500px) {
    margin: -200px 20px 0px 280px;
  }
`;

const TimeInfo = styled.span`
  max-width: 220px;
  width: 95%;
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  color: white;
  font-size: 24px;
  opacity: 1;
  bottom: 108px;
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

const TimeOutBox = styled.div`
  max-width: 100px;
  width: 95%;
  height: 40px;
  background: #000000 0% 0% no-repeat padding-box;
  opacity: 0.44;
  border-radius: 6px;
  margin: -150px 20px 0px 500px;
  position: relative;

  @media only screen and (max-width: 640px) {
    margin: -200px 20px 0px 430px;
  }

  @media only screen and (max-width: 500px) {
    margin: -200px 20px 0px 350px;
  }
`;

const TimeOut = styled.span`
  /* font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  color: white;
  position: relative;
  top: -30px;
  font-size: 14px;
  margin-right: 24px; */
  bottom: 108px;
  right: -50px;
  opacity: 0.7;
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
  margin-bottom: 10px;
`;

const PostContent = styled.span`
  font-size: 16px;
  margin-top: 20px;
  white-space: pre-line;
  text-align: left;
`;

const PostContentT = styled.span`
  /* font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf"; */
  font-size: 16px;
  margin-top: 20px;
  white-space: pre-line;
  text-align: left;
  font-weight: bold;
  color: black;
`;

const Line = styled.img`
  width: 100%;
  height: auto;
  margin: 36px 0px;
`;


const WrapC = styled.div`
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

const NicknameC = styled.span`
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


export default Detail;
