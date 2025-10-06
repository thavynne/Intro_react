import { useReducer } from "react";

type Estado = { contador: number }

type Acao = { tipo: "incrementar" } | { tipo: "decrementar" } | { tipo: "resetar" }

function reducer(state: Estado, action: Acao): Estado {
    switch (action.tipo) {
        case "incrementar":
            return { contador: state.contador + 1 }
        case "decrementar":
            return { contador: state.contador - 1 }
        case "resetar":
            return { contador: 0}
        default:
            return state
    }
}

function Contador3() {
    const [state,dispatch] = useReducer(reducer, { contador: 0 })

    return (
        <div>
            <h1>Contador: {state.contador}</h1>
            <button onClick={() => dispatch({ tipo: "incrementar" })}>+</button>
            <button onClick={() => dispatch({ tipo: "decrementar" })}>-</button>
            <button onClick={() => dispatch({ tipo: "resetar" })}>Resetar</button>
        </div>
    )
}

export default Contador3