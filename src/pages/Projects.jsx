import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Projects.css';

function Projects() {
  const handleClickRecipesApp = () => {
    const url = 'https://camiladamasio.github.io/recipes-app-project/#/';
    window.location.href = url;
  };

  const handleClickTrivia = () => {
    const url = 'https://camiladamasio.github.io/trivia-project/#/';
    window.location.href = url;
  };

  const handleClickMovieCards = () => {
    const url = 'https://camiladamasio.github.io/movie-cards-library-stateful/';
    window.location.href = url;
  };

  return (
    <div className="main-div">
      <Header />
      <div className="projects-body">
        <div className="title-projects">
          <h1>Projetos</h1>
        </div>
        <form action="" className="form-projects">
          <input
            type="button"
            value="Recipes App"
            className="button-link"
            onClick={ () => handleClickRecipesApp() }
          />
          <input
            type="button"
            value="Trivia"
            className="button-link"
            onClick={ () => handleClickTrivia() }
          />
          <input
            type="button"
            value="Movie Cards"
            className="button-link"
            onClick={ () => handleClickMovieCards() }
          />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
