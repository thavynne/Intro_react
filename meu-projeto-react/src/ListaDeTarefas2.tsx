import { useState } from 'react';

function ListaDeTarefas2() {

    const [tarefas, setTarefas] = useState<{ id: number, titulo: string, status: string }[]>([]);
    const [novaTarefa, setNovaTarefa] = useState<string>("");

    
    const adicionarTarefa = () => {
        if (novaTarefa.trim()) {
            setTarefas([
                ...tarefas, 
                { id: Date.now(), titulo: novaTarefa, status: 'pendente' } 
            ]);
            setNovaTarefa(""); 
        }
    };

    
    const alternarStatus = (id: number) => {
        setTarefas(tarefas.map(tarefa => 
            tarefa.id === id ? { ...tarefa, status: tarefa.status === 'pendente' ? 'concluida' : 'pendente' } : tarefa
        ));
    };

    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <input 
                type="text" 
                placeholder="Digite sua tarefa" 
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
            />
            <button onClick={adicionarTarefa}>Adicionar</button>

            <p>Tarefas:</p>
            {tarefas.length === 0 ? (
                <p>Nenhuma tarefa cadastrada.</p>
            ) : (
                <ul>
                    {tarefas.map((tarefa) => (
                        <li 
                            key={tarefa.id}
                            style={{
                                textDecoration: tarefa.status === 'concluida' ? 'line-through' : 'none',
                                color: tarefa.status === 'concluida' ? 'green' : 'red' 
                            }}
                            onClick={() => alternarStatus(tarefa.id)}
                        >
                            {tarefa.titulo}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ListaDeTarefas2;
