import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import Home from "./views/Home";


function App() {
  return (
    <>
     
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
      
      </Routes>
    </>
  );
}

export default App;
