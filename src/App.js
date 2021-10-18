import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/contato" component={ Contact } />
        <Route exact path="/sobre" component={ About } />
        <Route exact path="/" component={ Home } />
        <Route exact path="/projetos" component={ Projects } />
        <Route exact path="/habilidades" component={ Skills } />
      </Switch>
    </main>
  );
}

export default App;
