import { useState } from 'react';

function ListaDeTarefas() {
    const [tarefas, setTarefas] = useState<string[]>([])
    const [novaTarefa, setNovaTarefa] = useState<string>("")

    return (
    <div>
        <h2>Lista de Tarefas</h2>
        <input type="text" 
        placeholder='Digite sua tarefa'
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick= {() => {
            setTarefas([...tarefas, novaTarefa])
            setNovaTarefa("")
        }}>Adicionar</button>
        <p>Tarefas:</p>
        <ul>
            {tarefas.map((tarefa, index) => (
                <li key={index}>{tarefa}</li>
            ))}
        </ul>
    </div>
    )
}

export default ListaDeTarefas;