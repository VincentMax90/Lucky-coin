import React from "react";
import "./style.css";
import instagran from "../images/instagram.png";
import facebook from "../images/facebook.png";
import pedidosya from "../images/pedidosya.png";
import { Link } from "react-router-dom";
import  {useSelector}  from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      {" "}
      <div className="conteiner">
        <Link className="link text" to="/">
          <div>Lucky Coin </div>
        </Link>

        <div className="conteiner2">
          <a href="https://www.instagram.com/luckycoin_beer/">
            <img
              className="miniaturas"
              src={instagran}
              alt="Descripción de la imagen"
            />
          </a>
          <a href="https://www.facebook.com/LuckyCoinBeer">
            <img
              className="miniaturas"
              src={facebook}
              alt="Descripción de la imagen"
            />
          </a>
          <a href="https://www.pedidosya.com.ar/restaurantes/funes/lucky-coin-a07981e2-659a-4757-8a5d-30812362eb02-menu">
            <img
              className="miniaturas"
              src={pedidosya}
              alt="Descripción de la imagen"
            />
          </a> 
        </div>
      </div>{ user.nameAndLastname === null ? (
      <div className="conteiner3">
        <Link className="link" to="/Description">
          <div className="etiqueta">Quienes somos</div>
        </Link>{" "}
        <Link className="link" to="/Menu">
          <div className="etiqueta">Menu</div>
        </Link>{" "}  <Link className="link" to="/Contact">
          <div className="etiqueta">Contacto</div>
        </Link>{" "}
      </div> ):(
      <div className="conteiner3">
        <Link className="link" to="/Description">
          <div className="etiqueta">Quienes somos</div>
        </Link>{" "}
        <Link className="link" to="/EditMenu">
          <div className="etiqueta">Menu</div>
        </Link>{" "}  <Link className="link" to="/messajes">
          <div className="etiqueta">Mensajes</div>
        </Link>{" "}
      </div> )}
    </>
  );
};

export default Navbar;
