import { useState } from "react";

function Formulario() {
    //Esrado para armazenar o valor do input
    const [nome, setNome] = useState<string>("")

    return (
        <div>
            <h2>Formulário</h2>
            <input type="text" 
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />
            <p>Você digitou: {nome}</p>
        </div>
    )
}

export default Formulario;