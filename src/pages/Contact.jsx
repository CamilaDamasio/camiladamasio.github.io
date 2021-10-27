import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="main-div">
      <Header />
      <div className="contact-body">
        <div className="title-contact">
          <h1>Contato</h1>
        </div>
        <div className="info-contact">
          <a
          href="https://github.com/CamilaDamasio"
          target="_blank"
          rel="noopener noreferrer">
            <h5 className="name-contact">Meu GitHub</h5>
            <img align="center" width="60vw" height="60vh" alt="imagem github" src="https://cdn.iconscout.com/icon/free/png-256/github-108-438008.png"/>
          </a>
  
          <a
          href="https://www.linkedin.com/in/camilasdamasio/"
          target="_blank"
          rel="noopener noreferrer">
              <h5 className="name-contact">Meu Linkedin</h5>
            <img align="center" width="60vw" height="60vh" alt="imagem linkedin" src="https://i.ibb.co/Kx2GSrT/linkedin.png"/>
          </a>
          
          <div className="div-email">
            <h5 className="name-email">camiladamasioef@hotmail.com</h5>
            <img  className="email-png" align="center" width="60vw" height="60vh" alt="imagem email" src="https://pt.seaicons.com/wp-content/uploads/2015/06/Email-icon.png"/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
