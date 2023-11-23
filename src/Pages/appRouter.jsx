import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Receive from "./Receive";

import Home from "./Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Receive" element={<Receive />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
