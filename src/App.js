/** @format */

import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ReportPage from "./components/ReportPage";
import ViewItems from "./components/ViewItems";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/report/" element={<ReportPage />} />
        <Route path="/viewitems" element={<ViewItems />} />
        <Route
          path="*"
          element={
            <div>
              <div className="lost">you r lost</div>
              <br />
              <NavLink to={"/"}>
                <button className="lostbtn">Go back</button>
              </NavLink>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
