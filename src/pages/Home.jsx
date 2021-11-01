import React from 'react';
import Footer from '../components/Footer';
// import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../styles/Home.css';
import myphoto from '../images/my-photo.png';

function Home() {
  return (
    <div className="main-div">
      {/* <Header /> */}
      <Navbar />
      <div className="home-body">
        <div className="title-name">
          <h1>Camila Damásio</h1>
        </div>
        <div className="div-photo">
          <img
            src={ myphoto }
            alt="Foto de Camila Damásio"
            className="my-photo"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
