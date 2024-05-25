import React from 'react';
import ItemServico from './ItemServico';

const ListaServicos = ({ servicos, editarServico, excluirServico }) => {
  return (
    <div>
      {servicos.map((servico, index) => (
        <ItemServico
          key={index}
          servico={servico}
          editarServico={editarServico}
          excluirServico={excluirServico}
        />
      ))}
    </div>
  );
};

export default ListaServicos;
