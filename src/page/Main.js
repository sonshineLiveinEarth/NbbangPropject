import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Card from "../Card";
import addBtn from "../addBtn.png";

import { useDispatch } from "react-redux"


// 미들웨어 함수
import { loadPostsApi } from "../redux/modules/post";

const Main = (list) => {
  const navigate = useNavigate();
  const [checkedInputs, setCheckedInputs] = useState("All");

  const changeRadio = (e) => {
    if (e.target.checked) {
      setCheckedInputs(e.target.id);
    }
  };
  console.log(list.list);

  return (
    <>
      <Wrap>
        <CategoryWrap>
          <Label>
            <FormCheckLeft
              type="radio"
              id="All"
              name="radioButton"
              onChange={changeRadio}
              value={checkedInputs}
              defaultChecked
            />
            <FormCheckText>전체</FormCheckText>
          </Label>
          <Label>
            <FormCheckLeft
              type="radio"
              id="Chicken"
              name="radioButton"
              onChange={changeRadio}
              value={checkedInputs}
            />
            <FormCheckText>치킨</FormCheckText>
          </Label>
          <Label>
            <FormCheckLeft
              type="radio"
              id="Korean"
              name="radioButton"
              onChange={changeRadio}
              value={checkedInputs}
            />
            <FormCheckText>한식</FormCheckText>
          </Label>
          <Label>
            <FormCheckLeft
              type="radio"
              id="Midnight"
              name="radioButton"
              onChange={changeRadio}
              value={checkedInputs}
            />
            <FormCheckText>야식</FormCheckText>
            <Label>
              <FormCheckLeft
                type="radio"
                id="Chinese"
                name="radioButton"
                onChange={changeRadio}
                value={checkedInputs}
              />
              <FormCheckText>중식</FormCheckText>
            </Label>
          </Label>
        </CategoryWrap>

        <AddBtn
          onClick={() => {
            navigate("/write");
          }}
        >
          <AddBtnT src={addBtn} />
        </AddBtn>
        <CardWrap>
          <Card checkedInputs={checkedInputs} list={list.list} />
        </CardWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100vw;
  max-width: 1920px;
  height: 90vh;
  background-color: transparent;

  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr 1fr 5fr 1fr;
  justify-content: center;
  flex-flow: wrap;
  grid-gap: 20px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 4fr;
    grid-gap: 10px;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 4fr 0.5fr;
    grid-gap: 0px;
  }

  /* @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  } ; */
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
  @media only screen and (max-width: 800px) {
    width: 70px;
    height: 70px;
    bottom: 40px;
    right: 40px;
    cursor: pointer;
  } ;
`;

const CategoryWrap = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 40px auto auto auto;
  padding: 50px 0px;
  background-color: ${({ theme }) => theme.colors.BackgroundColor};
  @media only screen and (max-width: 1200px) {
    grid-column: 1 / 2;
    margin-left: 10px;
  }
`;

const FormCheckText = styled.span`
  font-family: "배달의민족 한나체 Pro OTF", "배달의민족한나체ProOTF",
    "bm-hanna-pro-otf";
  font-size: ${({ theme }) => theme.fontSizes.xl};
  width: 100px;
  margin-top: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
  background: #f7f7f7;
  border: none;
  display: flex;
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
    background: white;
  }
  display: none;
`;

const Label = styled.label``;

const AddBtnT = styled.img`
  width: 80px;
  height: 80px;
  z-index: 11;
  @media only screen and (max-width: 800px) {
    width: 70px;
    height: 70px;
  } ;
`;

const CardWrap = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 40px auto auto 40px;
  grid-column: 3 / 4;
  grid-row: 1 / 2;

  display: grid;
  grid-auto-rows: 230px;
  grid-template-columns: repeat(3, 1fr);
  padding: 50px 0px;
  justify-content: center;
  flex-flow: wrap;
  grid-gap: 20px;
  background-color: ${({ theme }) => theme.colors.BackgroundColor};

  @media only screen and (max-width: 1200px) {
    grid-column: 2 / 3;
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  } ;
`;

export default Main;
