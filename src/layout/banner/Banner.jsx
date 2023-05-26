import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import v1 from '../../videos/v1.mp4';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'reverse'
    }
  },
};

function Banner() {
  return (
    <div className="Banner">
    <div className="bloc">
      <video src={v1} autoPlay muted loop />
      <button className="button-reserver">
        <Link to="/reservation">RESERVER UNE TABLE</Link>
      </button>
    </div>
    <div className="Banner-text">
      <motion.h1 initial="hidden" animate="visible" variants={variants}>
        MAMAMIA PIZZ
      </motion.h1>
      <p>L'adresse incontournable pour les amateurs de pizza !</p>
    </div>
  </div>
  
  );
}

export default Banner;