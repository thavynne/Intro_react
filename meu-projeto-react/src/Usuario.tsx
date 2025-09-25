type UsuarioProps = {
    logado: boolean;
}

function Usuario({ logado }: UsuarioProps) {
    return (
        <div>
            {logado ? (
                <h2>Usuário Logado</h2>
            ) : (
                <h2>Usuário Desconectado</h2>
            )}
        </div>
    )
} 

export default Usuario;