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
import FindPW from "./components/pages/FindPW";
import FindID from "./components/pages/FindID";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Terms from "./components/pages/Terms";
import Report from "./components/pages/Report";
import ReportComplete from "./components/pages/ReportComplete";
import ReportTrash from "./components/pages/ReportTrash";
import ReportWaterway from "./components/pages/ReportWaterway";
import MyPage from "./components/pages/MyPage";
import Reward from "./components/pages/Reward";
import ReportTrashHistory from "./components/pages/ReportTrashHistory";
import ReportWaterwayHistory from "./components/pages/ReportWaterwayHistory";
import Favorites from "./components/pages/Favorites";
import FavList from "./components/pages/FavList";
import MainExamplePost from "./pages/MainExamplePost";

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
            <Route path="/trashcan" element={<SearchPage />} />
            <Route path="/mainexample" element={<MainExample />} />
            <Route
              path="/mainexample/detail/:id"
              element={<MainExampleDetail />}
            />
            <Route path="/mainexample/post" element={<MainExamplePost />} />
            <Route path="/base" element={<Base />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/find_id" element={<FindID />} />
            <Route path="/login/find_pw" element={<FindPW />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signup/terms" element={<Terms />} />
            <Route path="/report" element={<Report />} />
            <Route path="/report/trash" element={<ReportTrash />} />
            <Route path="/report/waterway" element={<ReportWaterway />} />
            <Route path="/report/complete" element={<ReportComplete />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/mypage/reward" element={<Reward />} />
            <Route
              path="/mypage/report/trash"
              element={<ReportTrashHistory />}
            />
            <Route
              path="/mypage/report/waterway"
              element={<ReportWaterwayHistory />}
            />
            <Route path="/mypage/favorites" element={<Favorites />} />
            <Route path="/mypage/favorites/list" element={<FavList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
