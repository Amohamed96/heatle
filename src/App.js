import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Unlimited from "./components/pages/Unlimited";
// import Challenge from "./Challenge";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/unlimited" element={<Unlimited />} />
      {/* <Route path="/challenge" element={<Challenge />}></Route> */}
    </Routes>
  );
};

export default App;
