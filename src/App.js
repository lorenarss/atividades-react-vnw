import React, { Component } from 'react';
// Crie uma class component 


// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.

// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)

class HelloWorld extends Component {
  state = {
    name: "Lorena",
    age: 28,
    favoriteFood: "açai",
    musics: ['Helena', "Famous last words", "the ghost of you"]

  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.age}</h2>
        <h3>{this.state.favoriteFood}</h3>
        <ul>
          <li>{this.state.musics[0]}</li>
          <li>{this.state.musics[1]}</li>
          <li>{this.state.musics[2]}</li>
        </ul>
        
      </div>
    );
  }
}

export default HelloWorld;