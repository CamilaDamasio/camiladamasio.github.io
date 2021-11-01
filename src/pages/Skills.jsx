import React from 'react';
import Footer from '../components/Footer';
// import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../styles/Skills.css';

function Skills() {
  return (
    <div className="main-div">
      {/* <Header /> */}
      <Navbar />
      <div className="skills-body">
        <div className="title-skills">
          <h1>Habilidades</h1>
        </div>
        <div className="body-skills">
          <div className="hability">
            <h5 className="name-contact">HTML5</h5>
            <img align="center" width="60vw" height="60vh" alt="imagem html5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
          </div>
          <div className="hability">
            <h5 className="name-contact">CSS3</h5>
            <img align="center" width="60vw" height="60vh" alt="imagem css3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"/>
          </div>
          <div className="hability">
            <h5 className="name-contact">Bootstrap</h5>
            <img align="center" width="60vw" height="60vh" alt="imagem bootstrap" src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"/>
          </div>
          <div className="hability">
            <h5 className="name-contact">JavaScript</h5>
            <img align="center" width="60vw" height="60vh" alt="imagem JavaScript" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"/>
          </div>
          <div className="hability">
            <h5 className="name-contact">React</h5>
            <img align="center" width="60vw" height="60vh" alt="imagem react" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"/>
          </div>
          <div className="hability">
            <h5 className="name-contact">Redux</h5>
            <img align="center" width="60vw" height="60vh" alt="imagem Redux" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"/>
          </div>
          <div className="hability">
            <h5 className="name-contact">MySQL</h5>
            <img align="center" width="70vw" height="70vh" alt="imagem MySQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"/>
          </div>
          <div className="hability">
            <h5 className="name-contact">MongoDB</h5>
            <img align="center" width="60vw" height="60vh" alt="imagem MongoDB" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"/>
          </div>
          <div className="hability">
            <h5 className="name-contact">Node.js</h5>
            <img align="center" width="60vw" height="60vh" alt="imagem Node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"/>
          </div>
          <div className="hability">
            <h5 className="name-contact">VSCode</h5>
            <img align="center" width="60vw" height="60vh" alt="imagem VSCode" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"/>
          </div>
          <div className="hability">
            <h5 className="name-contact">Git</h5>
            <img align="center" width="60vw" height="60vh" alt="imagem Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/>
          </div>
          <div className="hability">
            <h5 className="name-contact">GitHub</h5>
            <img align="center" width="60vw" height="60vh" alt="imagem github" src="https://cdn-icons-png.flaticon.com/512/270/270798.png"/>
          </div>
          <div className="hability">
            <h5 className="name-contact">Trello</h5>
            <img align="center" width="60vw" height="60vh" alt="imagem Trello" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Skills;
