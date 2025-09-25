type Produto = {
    id: number
    nome: string
    preco: number
}

function ListaProdutos() {
    const produtos : Produto[] = [
        {id: 1, nome: "NOtebook", preco: 3500},
        {id: 2, nome: "Mouse", preco: 120},
        {id: 3, nome: "Teclado", preco: 250}
    ]

    return (
        <ul>
            {produtos.map((p) => (
                <li key={p.id}>
                    {p.nome} - R$ {p.preco}
                </li>
            ))}
        </ul>
    )
}

export default ListaProdutos;