import React from 'react';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import maps from '../../images/maps.png';
import './NousTrouverPage.css';

function NousTrouverPage() {
  return (
    <>
      <Header />
      <main>
        <div className="NousTrouver">
          <h2>MAMAMIA PIZZ</h2> 
          <p>18 Rue Baudin, Agen, Nouvelle-Aquitaine 47000</p>
          <p>07-81-95-08-19</p>
          <img src={maps} alt="Carte du restaurant" />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NousTrouverPage;
