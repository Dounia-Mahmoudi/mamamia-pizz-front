import React, { useEffect, useState } from 'react';
import './MenuPage.css';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import lacarte from '../../images/lacarte.png';

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
    <>
      <Header />
      <main>
        <div>
          <h2>LA CARTE DU RESTAURANT</h2>
          <img src={lacarte} alt="Menu" className="restaurant-card-image" />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MenuPage;
