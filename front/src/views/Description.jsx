import React from "react";
import "./style.css";
import lucky1 from "../images/lucky1.png";
import lucky2 from "../images/lucky2.png";

const Description = () => {
  return (
    <>
      {" "}
      <div className="coteinerDescription">
        <div>
          <img src={lucky2} alt="Descripción de la imagen" className="photo" />
          <img src={lucky1} alt="Descripción de la imagen" className="photo" />
        </div>
        <div className="text1">
          Somos una empresa con sus inicios en finales del 2019, dedicada al
          rubro gastronomico ligada a la venta de cerveza y comida rapida. Nos
          dedicamos día a día a lograr la exelencia en cada uno de nuestros
          productos, seleccionando la mejor materia prima y proveedores,
          realizando un riguroso control de calidad. En Lucky-coin buscamos
          diferenciarnos por la calidad de nuestros productos junto con el mejor
          servicio y atención personalizada para nuestros clientes.
        </div>
      </div>
    </>
  );
};

export default Description;
