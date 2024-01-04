import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import Home from "./views/Home";
import Navbar from "./componets/navbar";
import Description from "./views/Description";
import Menu from "./views/Menu";
import Contact from "./views/Contact";
import Messajes from "./views/Messajes";
import Login from "./views/Login";
import Fotter from "./commons/Fotter";
import EditMenu from "./views/EditMenu";
function App() {
  return (
    <>
     
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Description" element={<Description/>}></Route>
        <Route path="/Menu" element={<Menu/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Messajes" element={<Messajes />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/EditMenu" element={<EditMenu />}></Route>

      </Routes>
      <Fotter/>
    </>
  );
}

export default App;
