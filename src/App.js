import "./App.css";
import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Route, } from "react-router-dom";
import Sginup from "./page/Sginup";

// import { history } from "../redux/configureStore";
// import { ConnectedRouter } from "connected-react-router";
// 배민한나체 폰트
import "@kfonts/bm-hanna-pro-otf";

// js파일
// import Main from "./Main";
import Header from "./Header";
import theme from "./theme";
import Formpage from "./page/Formpage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        {/* <ConnectedRouter history={history}> */}
        {/* <Main /> */}
        {/* <Route path="/" exact component={App} /> */}
        {/* <Route path="/signup" exact component={Sginup} /> */}
        {/* <Sginup/> */}
        <Formpage/>
        <Background />
        {/* </ConnectedRouter> */}
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
