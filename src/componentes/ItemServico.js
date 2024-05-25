import React from 'react';

const ItemServico = ({ servico, editarServico, excluirServico }) => {
  return (
    <div>
      <h3>{servico.nome}</h3>
      <p>{servico.descricao}</p>
      <button className="editar-btn" onClick={() => editarServico(servico)}>Editar</button>
      <button className="exclui-btn" onClick={() => excluirServico(servico)}>Excluir</button>
    </div>
  );
};

export default ItemServico;
