import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadCommentApi } from "../redux/modules/comment";
import { loadPostApi } from "../redux/modules/post";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { delPostApi } from "../redux/modules/post";
import { createCommentApi, deleteCommentApi } from "../redux/modules/comment";

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

  const commentText = React.useRef("");

  // console.log(params.id.split("."));
  // const index = params.id.split(".")[1];
  const postIdnum = Number(params.id);
  console.log(typeof postIdnum, postIdnum);

  const comment_list = useSelector((state) => state.comment.list);
  const card_list = useSelector((state) => state.post.list);

  const is_login = localStorage.getItem("jwtToken");
  const userEmail = cookies.get("userEmail");
  console.log(is_login);
  console.log(userEmail);

  const card = useSelector((state) => state.post.list);

  const index = params.id.split(".")[1];
  // const postIdnum = Number(params.id.split(".")[0]);
  // const posting = card.posts[index];

  React.useEffect(() => {
    dispatch(loadPostApi(postIdnum));
    dispatch(loadCommentApi(postIdnum));
  }, []);

  const posting = comment_list?.detail;
  const comment = comment_list?.existingComment;

  // 현재시간
  const today = new Date();
  const stringToday = today.toString().split(" ")[4];
  const todayHour = stringToday.split(":")[0];
  const todayMin = stringToday.split(":")[1];
  console.log(comment_list?.detail);
  // 주문희망시간
  // const orderHour = Number(posting.postOrderTime.split(":")[0]);
  // const orderMin = Number(posting.postOrderTime.split(":")[1]);

  // const leftHour = (orderHour - todayHour) * 60;
  // const leftMin = orderMin - todayMin;
  // // // 주문까지 남은시간
  // const leftTime = leftHour + leftMin;

  const TimeLabel = posting?.postOrderTime.split(":");

  console.log(TimeLabel);
  console.log();

  //포스팅 작성한 시간 커스텀하기
  const now = new Date();
  const Day = now.getDate();
  const month = Number(now.getMonth() + 1);
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const postTime = hours + ":" + minutes;

  const yearSub = year.toString().substr(2, 4);
  // var year00 = yearSub
  // const DateS = orderDate.toString().split(" ");
  // const postYM = DateS[3].split("0")[1] + "." + month + "." + DateS[2];
  // const todayYM = DateS[3].split("0")[1] + "." + month + "." + Day;
  // console.log(postYM);
  // console.log(todayYM);
  console.log(yearSub + "." + month + "." + Day + " " + postTime);
  const postDay = yearSub + "." + month + "." + Day + " " + postTime;
  const id = posting !== undefined ? posting.postId : null;
  //댓글 추가하기!

  const addComment = () => {
    if (commentText.current.value === "") {
      window.alert("댓글을 작성해주세요!");
    } else {
      // api에 데이터 추가하기!
      dispatch(
        createCommentApi({
          comment: commentText.current.value,
          commentDate: postDay,
          postId: id,
        })
      );
    }
  };

  console.log(id);

  const list = {
    comment: commentText.current.value,
    commentDate: postDay,
    postId: id,
  };
  console.log(list);

  return (
    <>
      <Wrap>
        <Div>
          {posting !== undefined && <PostDate>{posting.postDate}</PostDate>}
          {posting !== undefined && is_login && userEmail && (
            <>
              <div>
                {/* <EditBtn>수정</EditBtn> */}
                <EditBtn
                  onClick={() => {
                    const result =
                      window.confirm("정말 이 포스팅을 삭제할까요?");
                    if (result) {
                      dispatch(delPostApi(posting.postId));
                      navigate("/");
                    }
                  }}
                >
                  삭제
                </EditBtn>
              </div>
            </>
          )}
        </Div>
        {posting !== undefined ? (
          <>
            <PostTitle>{posting.postTitle}</PostTitle>
            <CommentInfo>
              <CommentIcon src={commentIcon} />
              <CommentNum>{posting.commentAll}</CommentNum>
            </CommentInfo>
            <PostImage postImage={posting.postImage} />
            <TimeWrap>
              {/* {leftTime !== undefined && leftTime > 0 ? (
                  <>
                    <TimeBox />
                    <TimeInfo>
                      주문까지{" "}
                      <Time>
                        {leftTime}
                        <TimeLabel>분</TimeLabel>
                      </Time>
                    </TimeInfo>
                  </>
                ) : (
                  <>
                    <TimeOutBox />
                    <TimeOut>마감</TimeOut>
                  </>
                )} */}
            </TimeWrap>
            <PostAdress>{posting.postAddress}에서 모여요</PostAdress>
            <div>
              <PostContent>주문 예정일 </PostContent>
              <PostContentT>{posting.postOrderDate} </PostContentT>
            </div>
            <div>
              <PostContent>주문 예정 시간 </PostContent>
              <PostContentT>
                {TimeLabel[0]}시 {TimeLabel[1]}분
              </PostContentT>
            </div>

            <PostContent>{posting.postContent}</PostContent>
            <NicknameC>글쓴이 {posting.userNickname}</NicknameC>
            <Line src={underLine} />
          </>
        ) : null}
      </Wrap>
      <WrapC>
        {is_login && userEmail && (
          <CommentInputWrap>
            <CommentInput
              ref={commentText}
              placeholder="댓글을 남겨주세요"
              autoFocus
            />
            <CommentBtn
              onClick={() => {
                addComment(id);
                navigate(0);
              }}
            >
              나도 끼기
            </CommentBtn>
          </CommentInputWrap>
        )}
        {comment !== undefined
          ? comment.map((list, index) => {
              return (
                <CommentBox key={index}>
                  <ProfileImage profileImage={list.userProfileImage} />

                  <CommentContentWrap>
                    <CommentProfileWrap>
                      <div>
                        <Nickname>{list.userNickname}</Nickname>
                        <CommentDate>{list.commentDate}</CommentDate>
                      </div>

                      <DeleteBtn
                        onClick={() => {
                          dispatch(deleteCommentApi(list.commentId));
                          navigate(0);
                        }}
                      >
                        삭제
                      </DeleteBtn>
                    </CommentProfileWrap>
                    <CommentContent>{list.comment}</CommentContent>
                  </CommentContentWrap>
                </CommentBox>
              );
            })
          : null}
      </WrapC>
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
