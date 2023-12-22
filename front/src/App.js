import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import Home from "./views/Home";
import Navbar from "./componets/navbar";
import LuckyCoin from "./views/LuckyCoin";
import Menu from "./views/Menu";
import Contact from "./views/Contact";

function App() {
  return (
    <>
     
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/LuckyCoin" element={<LuckyCoin/>}></Route>
        <Route path="/Menu" element={<Menu/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
    </>
  );
}

export default App;
