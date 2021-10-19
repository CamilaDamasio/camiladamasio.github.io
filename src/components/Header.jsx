import React from 'react';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();

  return (
    <header className="header navbar navbar-expand-lg navbar-light bg-light container-fluid">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <button type="button" className="navbar-nav" onClick={ () => history.push('/') }>
            <h5 className="nav-link active nav-item" aria-current="page">Home</h5>
          </button>
          <button type="button" className="navbar-nav" onClick={ () => history.push('/sobre') }>
            <h5 className="nav-link nav-item">Sobre</h5>
          </button>
          <button type="button" className="navbar-nav" onClick={ () => history.push('/habilidades') }>
            <h5 className="nav-link nav-item">Skills e Conhecimento</h5>
          </button>
          <button type="button" className="navbar-nav" onClick={ () => history.push('/contato') }>
            <h5 className="nav-link nav-item">Contato</h5>
          </button>
          <button type="button" className="navbar-nav" onClick={ () => history.push('/projetos') }>
            <h5 className="nav-link nav-item">Projetos</h5>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
