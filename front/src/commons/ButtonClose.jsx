import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {  logoutUser } from "../state/user"; // Agrega la importación de logoutUser
import { useNavigate } from "react-router";

const ButtonClose = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    axios
      .get("http://localhost:3001/api/user/logout", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        console.log("Logout successful:", response);
        dispatch(logoutUser()); 
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout failed", error);
      });
  };


  return (
    <>
      {user.nameAndLastname != null ? (
        <button
          onClick={handleLogout}
          variant="contained"
          style={{
            width: "50px",
            backgroundColor: "rgb(165 105 189 )",
            margin: "15px",
            fontWeight: "bold",
          }}
        >
          Salir
        </button>
      ) : null}
    </>
  );
};

export default ButtonClose;
