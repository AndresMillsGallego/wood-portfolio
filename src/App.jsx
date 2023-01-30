import React from "react";
import { Routes, Route } from "react-router-dom";

import Body from "./components/Body/Body";
import Floors from "./components/Floors/Floors";
import Stairs from "./components/Stairs/Stairs";
import Furniture from "./components/Furniture/Furniture";
import AboutMe from "./components/AboutMe/AboutMe";

import "./App.css";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/floors" element={<Floors />} />
      <Route path="/stairs" element={<Stairs />} />
      <Route path="/furniture" element={<Furniture />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  );
};

export default App;
