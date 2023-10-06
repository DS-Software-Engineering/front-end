import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<></>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
