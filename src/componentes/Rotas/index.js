import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PaginaInicial from '../PaginaInicial';
import PaginaFrontEnd from '../PaginaFrontEnd';
import PaginaBackEnd from '../PaginaBackEnd';

const Rotas = () => (
  <BrowserRouter> {/* armazena rotas */}
    <Switch>  {/* seleciona apenas um componente com base na url */}
      <Route exact path='/' component={ PaginaInicial } /> {/* associa componente com rota */}
      <Route path='/front-end' component={ PaginaFrontEnd } /> {/* componente sem 'exact' faz com que a rota /front-end/bla tbm seja aceita */}
      <Route path='/back-end' component={ PaginaBackEnd } />
    </Switch>
  </BrowserRouter>
);

export default Rotas;
