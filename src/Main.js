import React, { useState } from "react";
import styled from "styled-components";

import Card from "./Card";
import Category from "./Category";
import addBtn from "./addBtn.png";
import { useNavigate } from "react-router-dom";


const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <Wrap>
        <Category />
        <AddBtn  onClick={() => {
              navigate("/write");
            }}>
          <AddBtnT src={addBtn} />
        </AddBtn>
        <CardWrap>
          <Card />
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
