import React, { useState } from "react";
import styled from "styled-components";

const Category = () => {
  const [checkedInputs, setCheckedInputs] = useState([]);

  const changeRadio = (e) => {
    if (e.target.checked) {
      setCheckedInputs(e.target.id);
    }
  };
  console.log(checkedInputs);

  return (
    <>
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
    </>
  );
};

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

export default Category;
