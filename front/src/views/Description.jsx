import React, { useEffect, useState } from "react";
import "./style.css";
import lucky1 from "../images/lucky1.png";
import lucky2 from "../images/lucky2.png";
import lucky3 from "../images/lucky3.png";
import lucky4 from "../images/lucky4.png";
import lucky5 from "../images/lucky5.png";
import lucky6 from "../images/lucky6.png";

const Description = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coteinerDescription">
      <div id="imageContainer">
        <img
          src={lucky2}
          alt="Descripción de la imagen"
          className={`photo ${index === 0 ? "active" : ""}`}
        />
        <img
          src={lucky1}
          alt="Descripción de la imagen"
          className={`photo ${index === 1 ? "active" : ""}`}
        />
        <img
          src={lucky3}
          alt="Descripción de la imagen"
          className={`photo ${index === 2 ? "active" : ""}`}
        />
        <img
          src={lucky4}
          alt="Descripción de la imagen"
          className={`photo ${index === 3 ? "active" : ""}`}
        />
        <img
          src={lucky5}
          alt="Descripción de la imagen"
          className={`photo ${index === 4 ? "active" : ""}`}
        />
        <img
          src={lucky6}
          alt="Descripción de la imagen"
          className={`photo ${index === 5 ? "active" : ""}`}
        />
      </div>
      <div className="text1">
          Fundada a finales de 2019, Lucky-Coin se destaca en el ámbito
        gastronómico, fusionando la pasión por la cerveza y la comida rápida.
        Comprometidos con la excelencia, cada día nos esforzamos por superar
        expectativas, desde la cuidadosa selección de materias primas hasta la
        elección de los proveedores más confiables. Implementamos un estricto
        control de calidad para garantizar que cada producto cumpla con los
        estándares más exigentes. En Lucky-Coin, nos diferenciamos por la
        dedicación a ofrecer no solo productos de alta calidad, sino también un
        servicio excepcional y una atención personalizada para cada uno de
        nuestros clientes.
      </div>
    </div>
  );
};

export default Description;
