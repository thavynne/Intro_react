import React from 'react'
/* import './App.css' */
import Hello from './Hello'
import Welcome from './Welcome'
import { Button, Label } from './button'
import Card from './Card'
import Contador from './Contador'
import Formulario from './Formulario'
import Usuario from './Usuario'
import ListaDeTarefas from './ListaDeTarefas'
import ListaSimples from './ListaSimples'
import ListaProdutos from './ListaProdutos'
import ListaDeCompras from './ListaDeCompras'
import ListaDeTarefas2 from './ListaDeTarefas2'
import Contador2 from './Contador2'
import Contador3 from './Contador3'

function App() {
  return (
    <div>
      <Welcome name = "Maria"/>
      <Hello name="João" idade = {30}/>
      <h1>Olá, react </h1>
      <p>Meu primeiro componente funcional</p>
      <Button />
      <Label />
      <Card title="Hi" descricao="Primeiro de Hoje" data="2025-09-23"/>
      <Card title="Meu Card" descricao="Nada a falar"/>
      <Card title="Só mais um" descricao='Pra finalizar' data='2025-09-23'/>
      <Contador />
      <Formulario />
      <Usuario logado={true} />
      <ListaDeTarefas />
      <ListaSimples />
      <ListaProdutos />
      <ListaDeCompras />
      <ListaDeTarefas2 />
      <Contador2 />
      <Contador3 />
    </div>
  )
}

export default App
