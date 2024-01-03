import React, { useState } from "react";
import axios from "axios";  
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";


const Login = () => {
  const [loginUser, setLoginUser] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const dispatch = useDispatch();

  console.log("login: " + loginUser + ", password: " + loginPassword );

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/user/login",
        {
          email: loginUser,  
          password: loginPassword,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          credentials: "include",
        }
      );

      const userData = response.data;
      dispatch(setUser(userData))
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <>
      <div className="contLogin">
        <div className="login">
          <form onSubmit={handleLoginSubmit}>
            <div>
              Usuario<br></br>
              <input
                type="text"
                onChange={(e) => setLoginUser(e.target.value)}
                value={loginUser}
              ></input>
            </div>
            <div>
              Contraseña<br></br>
              <input
                type="password"
                onChange={(e) => setLoginPassword(e.target.value)}
                value={loginPassword}
              ></input>
            </div>
            <div>
              <button type="submit">Iniciar sesión</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
