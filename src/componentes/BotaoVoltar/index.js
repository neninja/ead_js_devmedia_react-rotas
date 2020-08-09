import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const BotaoVoltar = () => (
  <div className="area-botao">
    <Link className="botao-voltar" to='/'>Voltar</Link> {/* impede recarregamento da página */}
  </div>
);

export default BotaoVoltar;
