import React from "react";
import Home from "./pages/Home/Home";
import Header from "./pages/components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Popup from "./pages/components/Popup/Popup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/info/:dayCard" element={<Popup />} />
      </Routes>
      <div className="container">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
