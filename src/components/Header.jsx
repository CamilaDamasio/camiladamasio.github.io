import React from 'react';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();

  return (
    <header className="header navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <button type="button" className="navbar-nav" onClick={ () => history.push('/') }>
            <div className="nav-item">
              <h5 className="nav-link active" aria-current="page">Home</h5>
            </div>
          </button>
          <button type="button" className="navbar-nav" onClick={ () => history.push('/sobre') }>
            <div className="nav-item">
              <h5 className="nav-link">Sobre</h5>
            </div>
          </button>
          <button type="button" className="navbar-nav" onClick={ () => history.push('/habilidades') }>
            <div className="nav-item">
              <h5 className="nav-link">Skills e Conhecimento</h5>
            </div>
          </button>
          <button type="button" className="navbar-nav" onClick={ () => history.push('/contato') }>
            <div className="nav-item">
              <h5 className="nav-link">Contato</h5>
            </div>
          </button>
          <button type="button" className="navbar-nav" onClick={ () => history.push('/projetos') }>
            <div className="nav-item">
              <h5 className="nav-link">Projetos</h5>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
