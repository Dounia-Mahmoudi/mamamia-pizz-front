import React from 'react';
import './Footer.css';
import Logo from '../../images/logo.png';
import Snap from '../../images/snapchat.png';
import Inst from '../../images/instagram.png';

function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="Footer-logo">
              <img src={Logo} alt="MAMAMIA PIZZ logo" />
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="Footer-info">
              <h4>ADRESSE DE NOTRE RESTAURANT :</h4>
              <p>18 rue Baudin 47000 Agen</p>
              <p><i className="fa fa-phone"></i> 07 81 95 08 19</p>
              <p><i className="fa fa-envelope"></i> mamamiapizzz@gmail.com</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="Footer-hours">
              <h4>HORAIRES :</h4>
              <ul>
                <li>Lundi au Samedi : 12h00/14h00 - 18h00/23h00</li>
                <li>Dimanche : 18h00-23h00</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="Footer-social">
              <h4>SUIVEZ-NOUS SUR LES RESEAUX SOCIAUX</h4>
              <a href="https://t.snapchat.com/unt1zkY7" target="_blank" rel="noreferrer">
                <img src={Snap} alt="Snap icon" />
              </a>
              <a href="https://www.instagram.com/mamamiapizzagen/?igshid=NTc4MTIwNjQ2YQ%3D%3D" target="_blank" rel="noreferrer">
                <img src={Inst} alt="Instagram icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
