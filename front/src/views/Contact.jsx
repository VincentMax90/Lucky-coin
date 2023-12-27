import React from "react";

const Contact = () => {
  return (
    <>
      <div className="conteinerContact">Contacto</div>
      <div className="conteiner3">
        <div className="text3">
          <il>
            <ul>Arturo Illia 299Bis Funes · Funes · Argentina</ul>
            <ul>(0341) 3417185418 </ul>{" "}
            <ul> https://www.instagram.com/luckycoin_beer/ </ul>{" "}
            <ul>
              {" "}
              Horarios de atención: Miercoles a Domingo de 18 a 23.30 hs.
            </ul>{" "}
            <ul> Dejanos tu consulta o solicitud. </ul>{" "}
            <ul>Te responderemos a la brevedad.</ul>{" "}
          </il>
        </div>
        <div className="formulario textFormulario">
          Nombre<br></br>
          <input type="text"className="input" />
          <br></br>
          Telefono<br></br>
          <input type="text" className="input" />
          <br></br>
          Email<br></br>
          <input type="email" className="input" />
          <br></br>
          Mensaje <br></br>
          <input type="text" className="inputMensaje" />
          <br></br>
          <input type="submit" />
        </div>
      </div>

      <div id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.877055073492!2d-60.78736512494376!3d-32.927846373600964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b64de05d8888b5%3A0xf23dc544fbe4cce1!2sLucky%20Coin%20Cerveceria!5e0!3m2!1ses-419!2sar!4v1703374190794!5m2!1ses-419!2sar"></iframe>
      </div>
    </>
  );
};

export default Contact;
