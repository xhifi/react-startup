import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/page/Home";
import Post from "./components/page/Post";
import FourOhFour from "./components/page/FourOhFour";

const root = createRoot(document.getElementById("my-react-app"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
