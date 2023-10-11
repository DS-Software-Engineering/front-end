import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/header/Header";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<></>} />
          </Routes>
        </div>
        <Menu />
      </BrowserRouter>
    </>
  );
}

export default App;
