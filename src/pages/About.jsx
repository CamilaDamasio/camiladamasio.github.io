import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/About.css';

function About() {
  return (
    <div className="main-div">
      <Header />
      <div className="about-body">
        <div className="title-about">
          <h1>Sobre</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
