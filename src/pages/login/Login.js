import React, { useState } from 'react';
import './Login.css';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import profile from "../../images/profile.png";
import email from "../../images/email.jpg";
import pass from "../../images/pass.png";

function Login() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (nickname === 'MamamiaPizz' && password === 'Lechef47') {
      // Connexion réussie, effectuez les actions nécessaires ici
      console.log('Connexion réussie en tant qu\'administrateur');
      // Rediriger l'utilisateur vers la page d'administration ou effectuer d'autres actions
    } else {
      // Afficher un message d'erreur ou effectuer d'autres actions pour une connexion incorrecte
      console.log('Identifiant ou mot de passe incorrect');
    }
  };

  return (
    <div>
      <Header />
      <main>
        <div className="main">
          <div className="sub-main">
            <div>
              <div className="imgs">
                <div className="container-image">
                  <img src={profile} alt="profile" className="profile" />
                </div>
              </div>
              <div>
                <h1>LOGIN ADMIN</h1>
                <div>
                  <img src={email} alt="email" className="email" />
                  <input type="text" placeholder="nickname" className="name" value={nickname} onChange={handleNicknameChange} />
                </div>
                <div className="second-input">
                  <img src={pass} alt="pass" className="email" />
                  <input type="password" placeholder="password" className="name" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="login-button">
                  <button onClick={handleLogin}>Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
