import { useEffect, useState } from 'react';

function Contador() {
    const [contador, setContador] = useState<number>(0);

    useEffect(() => {
        document.title = 'Contador: ${contador}'
    }, [contador])

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    )
}

/* function Contador() {
    // contador = valor do estado
    // setContador = função para atualizar o estado
    const [contador, setContador] = useState<number>(0)

    return (
        <div>
            <h2>Contador: Você clicou {contador} vezes</h2>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        </div>
    )
} */

export default Contador