import React from 'react';
import './AccueilPage.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Header from '../../layout/header/Header';
import Banner from '../../layout/banner/Banner';
import Footer from '../../layout/footer/Footer';
import LeResto from '../../images/resto.png';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';

function AccueilPage({ isAdmin }) {
  return (
    <>
      <Header />
      <Banner />

      <section className="Accueil" id="accueil">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md={6}>
              <div className="Accueil-content">
                <div className="Accueil-text">
                  <h2>NOTRE RESTAURANT</h2>
                  <p>
                    Mamamia Pizz est une pizzeria située en plein centre d’Agen, qui vous accueille dans un endroit chaleureux et convivial. Depuis 2022, nous vous proposons des pizzas préparées avec des produits frais et locaux, et inspirées des recettes traditionnelles italiennes. Notre équipe est passionnée par la pizza et vous fait partager son savoir-faire et sa bonne humeur. Chez Mamamia Pizz, vous vous sentirez comme chez vous!
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="Accueil-image">
                <img src={LeResto} alt="Accueil" />
              </div>
            </Col>  
          </Row>
        </Container>
      </section>

      <section className="Scroll" id="scroll">
      <div className="ScrollDown">
        <p>Scroll vers le bas</p>
        <div className="Arrow"></div>
      </div>
    </section>

      <section className="Specialites" id="specialites">
        <Container>
          <h2>NOS SPECIALITES</h2>
          <Row className="nos-specialites">
            <Col md={4}>
              <Card className="specialite-card">
                <Card.Img variant="top" src={img1} alt="Salade" className="card-image" />
                <Card.Body>
                  <Card.Title>Salade</Card.Title>
                  <Card.Text>Délicieuses salades fraîches avec des ingrédients de saison.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="specialite-card">
                <Card.Img variant="top" src={img2} alt="Pasta" className="card-image" />
                <Card.Body>
                  <Card.Title>Pasta</Card.Title>
                  <Card.Text>Pâtes fraîches préparées avec des sauces savoureuses et des ingrédients de qualité.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="specialite-card">
                <Card.Img variant="top" src={img3} alt="Pizza" className="card-image" />
                <Card.Body>
                  <Card.Title>Pizza</Card.Title>
                  <Card.Text>Pizzas authentiques avec des garnitures délicieuses et une pâte croustillante.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="button-menu">
            <Link to="/menu">DECOUVRIR NOTRE CARTE</Link>
          </div>
          <h3>N'ATTENDEZ PLUS POUR COMMANDER !</h3>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default AccueilPage;
