import React from "react";
import { useState } from "react";

function PlantCard({ plant, deletePlant }) {
  const [isInStock, setIsInStock] = useState(true);

  const handleStockToggle = () => {
    setIsInStock(!isInStock);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className="primary" onClick={handleStockToggle}>
        {isInStock ? "In Stock" : "Out of Stock"}
      </button>
      <button onClick={() => deletePlant(plant.id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
