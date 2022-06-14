import "./App.css";
import React, { useState, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

// 배민한나체 폰트
import "@kfonts/bm-hanna-pro-otf";

// js파일
<<<<<<< HEAD
import Main from "./page/Main";
=======
// import Main from "./Main";
>>>>>>> 54a83e4419d365cdd2cf3e893aa8a6e81aaad7b7
import Header from "./Header";
import theme from "./theme";
import Detail from "./page/Detail";

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
            <Route
              path="/detail/:postId"
              element={<Detail list={card_list} />}
            />
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
