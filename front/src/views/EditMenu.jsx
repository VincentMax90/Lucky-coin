import React, { useState } from "react";
import axios from "axios";

const EditMenu = () => {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    description: "",
    price: "",
    photo: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      formData.price = parseFloat(formData.price)
      await axios.post("http://localhost:3001/api/menu/creation", formData);

      setFormData({
        category: "",
        name: "",
        description: "",
        price: "",
        photo: "",
      });

      alert("Menú creado exitosamente.");
    } catch (error) {
      console.error("Error al crear el menú:", error);
      alert("Error al crear el menú. Por favor, inténtelo de nuevo.");
    }
  };
console.log(formData)
  return (
    <>
      <div className="conteinerContact">Crear Menú</div>
      <div className="conteiner3">
        <div className="formulario textFormulario">
          <form onSubmit={handleSubmit}>
            <div>
              Categoría<br />
              <input
                type="text"
                className="input"
                placeholder="Categoría"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />
            </div>
            <div>
              Nombre del Menú<br />
              <input
                type="text"
                className="input"
                placeholder="Nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              Descripción<br />
              <textarea
                className="inputMensaje"
                rows="5"
                cols="40"
                placeholder="Descripción"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              ></textarea>
            </div>
            <div>
              Precio<br />
              <input
                type="text"
                className="input"
                placeholder="Precio"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </div>
            <div>
              URL de la Foto<br />
              <input
                type="text"
                className="input"
                placeholder="URL de la Foto"
                value={formData.photo}
                onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
              />
            </div>
            <div>
              <input type="submit" className="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditMenu;
