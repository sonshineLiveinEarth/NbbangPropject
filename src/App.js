import "./App.css";
import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// 배민한나체 폰트
import "@kfonts/bm-hanna-pro-otf";

// js파일
import Main from "./page/Main";
import Header from "./Header";
import theme from "./theme";
import Detail from "./page/Detail";
import Write from "./page/Write";
import Login from "./page/login";
import Signup from "./page/Signup";

import { useDispatch } from "react-redux";
// 미들웨어 함수
import { loadPostsApi } from "./redux/modules/post";

function App() {
  // const card_list = useSelector((state) => state.post.list);
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   loadPostsApi(dispatch);
  // }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Background>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:postId" element={<Detail />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/write" element={<Write />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Background>
      </ThemeProvider>
    </div>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.BackgroundColor};
  padding-bottom: 10vh;
`;

export default App;
