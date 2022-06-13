import { css } from "styled-components";

// RoundBtn과 RectangleBtn에서 공통적으로 사용할 스타일
const Btn = css`
  display: lower;
  margin: 2px;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mainColor};
`;

export const RoundBtn = css`
  ${Btn};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const RectangleBtn = css`
  ${Btn};

  width: 50px;
  height: 30px;
  border-radius: 15%;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
