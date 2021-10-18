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
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
