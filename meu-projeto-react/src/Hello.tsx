import React from "react";

type HelloProps = {
  name: string;
  idade: number;
};

function Hello({ name, idade }: HelloProps) {
  return (
    <h2>
      Olá, {name}! Você tem {idade} anos de idade
    </h2>
  );
}

export default Hello;
