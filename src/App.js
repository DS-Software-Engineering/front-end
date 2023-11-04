import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/header/Header";
import Menu from "./components/menu/Menu";
import SearchPage from "./pages/SearchPage";
import RecycleExplain from "./pages/RecycleExplainPage";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/explain" element={<RecycleExplain />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
