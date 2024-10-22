import React from 'react';
import ComponentePai from './components/ComponentePai';

// Componente Pai
const ComponentePai = () => {
  const mensagemParaFilho = 'Olá, eu sou a mensagem passada do Pai para o Filho!';

  return (
    <div>
      <h1>Componente Pai</h1>
      <ComponentePai mensagem={mensagemParaFilho} />
    </div>
  );
};

export default ComponentePai;
