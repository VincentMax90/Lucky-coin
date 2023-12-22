import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import Home from "./views/Home";
import Navbar from "./componets/navbar";

function App() {
  return (
    <>
     
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      
      </Routes>
    </>
  );
}

export default App;
