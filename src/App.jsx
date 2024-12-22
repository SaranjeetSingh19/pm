import React from "react";
import { Routes, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page2No from "./Page2No";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/secondPage" element={<Page2 />} />
      <Route path="/secondPageNo" element={<Page2No />} />
      <Route path="/thirdPage" element={<Page3 />} />
      <Route path="/fourthPage" element={<Page4 />} />
      <Route path="/fifthPage" element={<Page5 />} />
      <Route path="/sixthPage" element={<Page6 />} />
      <Route path="/seventhPage" element={<Page7 />} />
    </Routes>
  );
};

export default App;
