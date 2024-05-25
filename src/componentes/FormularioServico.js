import React, { useState, useEffect } from 'react';

const FormularioServico = ({ adicionarServico, servicoAtual, atualizarServico }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    if (servicoAtual) {
      setNome(servicoAtual.nome);
      setDescricao(servicoAtual.descricao);
    } else {
      setNome('');
      setDescricao('');
    }
  }, [servicoAtual]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && descricao) {
      if (servicoAtual) {
        atualizarServico({ nome, descricao });
      } else {
        adicionarServico({ nome, descricao });
      }
      setNome('');
      setDescricao('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="nomeServico">
        <label htmlFor="nome">Nome do Serviço:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className='descServico'>
        <label htmlFor="descricao">Descrição do Serviço:</label>
        <textarea
          id="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          rows={5}
          cols={30}
        />
      </div>
      <button type="submit" 
        className={servicoAtual ? "att-btn" : "add-btn"}>
        {servicoAtual ? 'Atualizar Serviço' : 'Adicionar Serviço'}
      </button>
    </form>
  );
};

export default FormularioServico;
