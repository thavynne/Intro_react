import React, { useState } from "react";

function ListaDeCompras() {
  const [itens, setItens] = useState<{ nome: string; quantidade: number }[]>([]);
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(1);

  const adicionarItem = () => {
    if (nome.trim() === "" || quantidade <= 0) return;

    setItens([...itens, { nome: nome.trim(), quantidade }]);
    setNome("");
    setQuantidade(1);
  };

  return (
    <div>
      <h2>Lista de Compras</h2>

      <input
        type="string"
        placeholder="Nome do produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="number"
        min={1}
        value={quantidade}
        onChange={(e) => setQuantidade(Number(e.target.value))}
      />

      <button onClick={adicionarItem}>Adicionar</button>

      {itens.length === 0 ? (
        <p>Lista vazia.</p>
      ) : (
        <ul>
          {itens.map((item, index) => (
            <li key={index}>
              {item.nome} - Quantidade: {item.quantidade}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaDeCompras;
