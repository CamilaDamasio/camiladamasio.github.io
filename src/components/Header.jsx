import React from 'react';
import { useHistory } from 'react-router-dom';

function Header() {
  const history = useHistory();

  return (
    <header className="header">
      <button type="button" onClick={ () => history.push('/') }>
        <h5>Home</h5>
      </button>
      <button type="button" onClick={ () => history.push('/sobre') }>
        <h5>Sobre</h5>
      </button>
      <button type="button" onClick={ () => history.push('/habilidades') }>
        <h5>Skills e Conhecimento</h5>
      </button>
      <button type="button" onClick={ () => history.push('/contato') }>
        <h5>Contato</h5>
      </button>
      <button type="button" onClick={ () => history.push('/projetos') }>
        <h5>Projetos</h5>
      </button>
    </header>
  );
}

export default Header;
