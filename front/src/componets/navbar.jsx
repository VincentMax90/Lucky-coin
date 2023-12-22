import React from "react";
import "./navbar.css";
import instagran from "../images/instagram.png";
import facebook from "../images/facebook.png";
import pedidosya from "../images/pedidosya.png";

const Navbar = () => {
  return (
    <>
      {" "}
      <div className="conteiner">
        <a className="text">Lucky Coin </a>

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
        </a></div>
      </div>
      <div className="conteiner3">hola</div>
    </>
  );
};

export default Navbar;
