import React from 'react';

type CardProps = {
    title: string;
    descricao: string;
    data?: string;
};

export function Card({ title, descricao, data }: CardProps) {
    return (
        <div style={{
      border: '1px solid #dddddd9d',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      backgroundColor: '#f9f9f91e'
    }}>
        <h3>Título: {title}</h3>
        <p>Descrição: {descricao}</p>
        {data && <p>Data: {data}</p>}
        </div>
    );
}

export default Card;
