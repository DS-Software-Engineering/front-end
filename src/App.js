import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/header/Header";
import Menu from "./components/menu/Menu";
import SearchPage from "./pages/SearchPage";
import RecycleExplain from "./pages/RecycleExplainPage";
import TrashCanList from "./pages/TrashCanListPage";
import MainExample from "./pages/MainExample";
import MainExampleDetail from "./pages/MainExampleDetail";
import Base from "./components/main/BottomSheet/Base";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/explain" element={<RecycleExplain />} />
            <Route path="/trashcan" element={<TrashCanList />} />
            <Route path="/mainexample" element={<MainExample />} />
            <Route path="/mainexample/detail" element={<MainExampleDetail />} />
            <Route path="/base" element={<Base />} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
