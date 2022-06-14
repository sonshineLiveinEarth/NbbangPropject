import "./App.css";
import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

// 배민한나체 폰트
import "@kfonts/bm-hanna-pro-otf";

// js파일
import Main from "./page/Main";
import Header from "./Header";
import theme from "./theme";
<<<<<<< HEAD
import Detail from "./page/Detail";
=======
import Detail from "./Detail";
import Write from "./page/Write";
>>>>>>> 9fb016417b6abe30ed02f04670d5092b27485af5

function App() {
  const [card_list, setCard_list] = React.useState([]);

  React.useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5001/posts",
    }).then((response) => {
      setCard_list(response.data);
    });
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Background>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
<<<<<<< HEAD
            <Route
              path="/detail/:postId"
              element={<Detail list={card_list} />}
            />
=======
            <Route path="/detail" element={<Detail />} />
            <Route path="/write" element={<Write />} />
>>>>>>> 9fb016417b6abe30ed02f04670d5092b27485af5
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
