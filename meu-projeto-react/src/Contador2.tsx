import { useState, useCallback } from "react";

function Contador2() {
    const [contador, setContador] = useState(0)

    const incrementar = useCallback(() => {
        setContador((prev) => prev + 1)
    }, [])

    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={incrementar}>Adicionar</button>
        </div>
    )
}

export default Contador2