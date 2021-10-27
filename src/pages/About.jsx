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
        <div className="body-text">
          <p>Graduada em Educação Física, estou em transição de carreira para a área da tecnologia. Atualmente estudo Desenvolvimento de Software na Trybe, módulo front-end completo com conhecimento em React, Router, Testes com RTL, Redux com React, Context API, React Hooks, metodologias ágeis e habilidades comportamentais.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
