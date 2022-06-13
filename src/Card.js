import React from "react";
import styled from "styled-components";
import commentIcon from "./comment.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Card = () => {
  const navigate = useNavigate();
  const [card_list, setCard_list] = React.useState([]);

  React.useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5001/posts",
    }).then((response) => {
      setCard_list(response.data);
    });
  }, []);

  console.log(card_list);

  return (
    <>
      {card_list.map((list, index) => {
        return (
          <CardBox
            key={index}
            onClick={() => {
              navigate("/detail");
            }}
          >
            <PostImg postImage={list.postImage}>
              <ImgTop>
                <Tag>
                  <TagName>
                    {list.postCategory === "Chicken" && "치킨"}
                    {list.postCategory === "Korean" && "한식"}
                    {list.postCategory === "Midnight" && "야식"}
                    {list.postCategory === "Chinese" && "중식"}
                  </TagName>
                </Tag>
                <div>
                  <TimeBox />
                  <TimeInfo>
                    주문까지 <Time>40</Time>분
                  </TimeInfo>
                </div>
              </ImgTop>
            </PostImg>
            <PostInfoWrap>
              <PostTitle>{list.postTitle}</PostTitle>
              <PostInfo>
                <Nickname>{list.userNickname}</Nickname>
                <CommentWrap>
                  <CommentIcon src={commentIcon} />
                  <CommentNum>10</CommentNum>
                </CommentWrap>
              </PostInfo>
            </PostInfoWrap>
          </CardBox>
        );
      })}
    </>
  );
};

const CardBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-shadow: 0px 5px 10px #00000020;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 5px 20px #00000040;
  }
`;

const PostImg = styled.div`
  width: 100%;
  height: 70%;
  background-color: #ddd;
  border-radius: 20px 20px 0px 0px;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    ),
    url(${(props) => props.postImage});
  background-position: center 30%;
  background-size: cover;
`;
const ImgTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Tag = styled.div`
  width: 50px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 6px;
  margin: 16px 0px 0px 24px;
  position: relative;
`;

const TagName = styled.span`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  color: white;
  position: relative;
  top: -6px;
  font-size: 14px;
`;

const TimeBox = styled.div`
  width: 100px;
  height: 24px;
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
  top: -30px;
  font-size: 14px;
  opacity: 1;
  margin-right: 24px;
`;

const Time = styled.span`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  color: #ffcf00;
  font-size: 14px;
  opacity: 1;
`;

const PostInfoWrap = styled.div`
  width: 100%;
  height: 30%;
  background-color: white;
  border-radius: 0px 0px 20px 20px;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
`;

const PostTitle = styled.span`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  width: 100%;
  color: black;
  font-size: 16px;
  text-align: left;
  margin-left: 24px;
`;

const PostInfo = styled.div`
  width: 100%;
  margin-top: 4px;
  background-color: white;
  border-radius: 0px 0px 20px 20px;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Nickname = styled.span`
  color: #e2e2e2;
  font-size: 14px;
  text-align: left;
  margin-left: 24px;
  font-weight: bold;
`;

const CommentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CommentIcon = styled.img`
  width: 20px;
  height: auto;
  opacity: 0.6;
`;

const CommentNum = styled.span`
  color: black;
  font-size: 14px;
  margin-left: 10px;
  font-weight: bold;
  margin-right: 24px;
`;

export default Card;
