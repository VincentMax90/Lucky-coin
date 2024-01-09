import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/menu/all")
      .then((response) => {
        setMenuItems(response.data);
        // Extrae las categorías únicas de los productos
        const uniqueCategories = [
          ...new Set(response.data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  // Filtra los productos según la categoría seleccionada
  const filteredMenuItems = selectedCategory
    ? menuItems.filter((item) => item.category === selectedCategory)
    : menuItems;

  return (
    <>
      {" "}
      <button onClick={() => handleCategoryClick(null)}>All Categories</button>
      {categories.map((category) => (
        <button key={category} onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
      ))}
      <div className="menu-container">
        {filteredMenuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <div>
              <img src={item.photo} alt={"photo"} className="photoCard" />
            </div>
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
