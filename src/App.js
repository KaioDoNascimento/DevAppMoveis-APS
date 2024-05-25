/*
DESENVOLVIMENTO DE APLICAÇÕES MÓVEIS
TURMA 121
KAIO ALEXANDRE DO NASCIMENTO 
MATRÍCULA 2020101939
*/

import React, { useState } from 'react';
import FormularioServico from './componentes/FormularioServico';
import ListaServicos from './componentes/ListaServico';

const App = () => {
  const [servicos, setServicos] = useState([]);
  const [servicoAtual, setServicoAtual] = useState(null);

  const adicionarServico = (servico) => {
    setServicos([...servicos, servico]);
  };

  const editarServico = (servico) => {
    setServicoAtual(servico);
  };

  const atualizarServico = (servicoAtualizado) => {
    setServicos(
      servicos.map((servico) =>
        servico.nome === servicoAtualizado.nome ? servicoAtualizado : servico
      )
    );
    setServicoAtual(null);
  };

  const excluirServico = (servicoParaExcluir) => {
    setServicos(servicos.filter((servico) => servico !== servicoParaExcluir));
  };

  return (
    <div className="container">
      <h1>Gerenciador de Serviços</h1>
      <FormularioServico
        adicionarServico={adicionarServico}
        servicoAtual={servicoAtual}
        atualizarServico={atualizarServico}
      />
      <hr></hr>
      <ListaServicos
        servicos={servicos}
        editarServico={editarServico}
        excluirServico={excluirServico}
      />
    </div>
  );
};

export default App;
