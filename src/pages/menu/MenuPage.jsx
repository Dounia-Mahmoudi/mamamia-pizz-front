import React, { useEffect, useState } from 'react';
import './MenuPage.css';

function MenuPage() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('/api/menu')
      .then(response => response.json())
      .then(data => {
        setPizzas(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des éléments du menu:', error);
      });
  }, []);

  return (
    <div>
      <h2>LA CARTE</h2>
      <ul>
        {pizzas.map(pizza => (
          <li key={pizza.id_pizza}>
            <h3>{pizza.pizza_name}</h3>
            <p>Catégorie: {pizza.PizzaCategory.category_name}</p>
            <p>Prix: {pizza.pizza_price}€</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuPage;
