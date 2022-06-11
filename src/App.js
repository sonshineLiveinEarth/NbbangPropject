import "./App.css";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
// 배민한나체 폰트
import "@kfonts/bm-hanna-pro-otf";

// js파일
import Main from "./Main";
import Header from "./Header";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Main />
        <Background />
      </div>
    </ThemeProvider>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.BackgroundColor};
`;

export default App;
