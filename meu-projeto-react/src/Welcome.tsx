import React, { Component } from 'react';

// Define o tipo das props corretamente
type WelcomeProps = {
  name: string;
};

// Componente de classe tipado com TypeScript
class Welcome extends Component<WelcomeProps> {
  render() {
    return <h1>Bem-vindo, {this.props.name}</h1>;
  }
}

export default Welcome;
