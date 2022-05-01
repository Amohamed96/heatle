import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Unlimited from "./Unlimited";
import Challenge from "./Challenge";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/unlimited" element={<Unlimited />}></Route>
      {/* <Route path="/challenge" element={<Challenge />}></Route> */}
    </Routes>
  );
};

export default Main;
