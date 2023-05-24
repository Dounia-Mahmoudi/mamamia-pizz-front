import React, { useState } from 'react';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import './ReservationPage.css';
import table from '../../images/table.jpg';


function ReservationPage() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState(1);
  const [reserved, setReserved] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationData = {
      name: name,
      surname: surname,
      phone: phone,
      email: email,
      date: date,
      time: time,
      people: people,
      message: message
    };
    fetch('/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservationData)
    })
    .then(response => {
      if (response.ok) {
        setReserved(true);
      } else {
        throw new Error('Une erreur est survenue');
      }
    })
    .catch(error => console.error(error));
  };

  return (
    <>
      <Header />
      <main>
        <section className="Reservation" id="reservation">
          <h2>RESERVEZ UNE TABLE</h2>
          <p>Vous souhaitez venir déguster nos plats dans notre restaurant ? <br />
            Remplissez le formulaire ci-dessous ou appelez-nous au 07 81 95 08 19</p>
          <form className="Reservation-form" onSubmit={handleSubmit}>
            <div className="Reservation-form-group">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="Reservation-form-group">
              <label htmlFor="surname">Prenom</label>
              <input type="text" id="surname" value={surname} onChange={(e) => setSurname(e.target.value)} required />
            </div>
            <div className="Reservation-form-group">
              <label htmlFor="phone">Téléphone</label>
              <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div className="Reservation-form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="Reservation-form-group">
              <label htmlFor="date">Date de réservation</label>
              <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div className='Reservation-form-group'>
              <label htmlFor='time'>Horaire de réservation</label>
              <select id='time' value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value=''>Choisissez un créneau</option>
                <option value='11h30 - 12h30'>11h30 - 12h30</option>
                <option value='12h30 - 13h30'>12h30 - 13h30</option>
                <option value='13h30 - 14h30'>13h30 - 14h30</option>
                <option value='18h00 - 19h00'>18h00 - 19h00</option>
                <option value='19h00 - 20h00'>19h00 - 20h00</option>
                <option value='20h00 - 21h00'>20h00 - 21h00</option>
                <option value='21h00 - 22h00'>21h00 - 22h00</option>
                <option value='22h00 - 23h00'>22h00 - 23h00</option>
              </select>
            </div>
            <div className="Reservation-form-group">
              <label htmlFor="people">Nombre de personnes</label>
              <input type="number" id="people" value={people} onChange={(e) => setPeople(e.target.value)} min={1} max={10} required />
            </div>
            <div className="Reservation-form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button type="submit">RESERVER</button>
          </form>
          {reserved && <p className="Reservation-sent">Votre réservation a bien été enregistrée. Nous vous attendons avec impatience.</p>}
          <div className="section-separator"></div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ReservationPage;
