import React from 'react';
import './Footer.css';
import Logo from '../../images/logo.png';
import Snap from '../../images/snapchat.png';
import Inst from '../../images/instagram.png';

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-logo"> 
        <img src={Logo} alt="MAMAMIA PIZZ logo" />
      </div>
      <div className="Footer-info">
        <p><i className="fa fa-map-marker"></i> ADRESSE DE NOTRE RESTAURANT :</p>
        <p>18 rue Baudin 47000 Agen</p>
        <p><i className="fa fa-phone"></i> 07 81 95 08 19</p>
        <p><i className="fa fa-envelope"></i> mamamiapizzz@gmail.com</p>
      </div>
      <div className="Footer-hours">
        <p><i className="fa fa-clock"></i> HORAIRES :</p>
        <ul>
          <li>Lundi au Samedi : 12h00/14h00 - 18h00/23h00</li>
          <li>Dimanche : 18h00-23h00</li>
        </ul>
      </div>
      <div className="Footer-social">
        <h2>SUIVEZ-NOUS SUR LES RESEAUX SOCIAUX</h2> 
        <a href="https://t.snapchat.com/unt1zkY7" target="_blank" rel="noreferrer">
          <img src={Snap} alt="Snap icon" />
        </a>
        <a href="https://www.instagram.com/mamamiapizzagen/?igshid=NTc4MTIwNjQ2YQ%3D%3D" target="_blank" rel="noreferrer">
          <img src={Inst} alt="Instagram icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;