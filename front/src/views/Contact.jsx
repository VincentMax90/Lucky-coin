import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      formData.date = new Date().toISOString();  
      formData.messaje = formData.message; 

    
      await axios.post("http://localhost:3001/api/messaje/create", formData);

     
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      alert("Mensaje enviado exitosamente.");
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Error al enviar el mensaje. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <>
      <div className="conteinerContact">Contacto</div>
      <div className="conteiner3">
        <div className="text4">
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
          <form onSubmit={handleSubmit}>
            <div>
              Nombre<br />
              <input
                type="text"
                className="input"
                placeholder="Nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              Telefono<br />
              <input
                type="text"
                className="input"
                placeholder="Telefono"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              Email<br />
              <input
                type="email"
                className="input"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              Mensaje <br />
              <textarea
                className="inputMensaje"
                rows="5"
                cols="40"
                name="text"
                placeholder="Mensaje"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <div>
              <input type="submit" className="submit" />
            </div>
          </form>
        </div>
      </div>

     
      <div id="map">
        <iframe  title="Descripción única" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.877055073492!2d-60.78736512494376!3d-32.927846373600964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b64de05d8888b5%3A0xf23dc544fbe4cce1!2sLucky%20Coin%20Cerveceria!5e0!3m2!1ses-419!2sar!4v1703374190794!5m2!1ses-419!2sar"></iframe>
      </div>
    </>
  );
};

export default Contact;


