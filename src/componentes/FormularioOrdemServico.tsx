import { useState } from 'react';
import type { OrdemServico } from '../types/entidades';

type DadosFormulario = Pick<OrdemServico, 'descricaoDefeito' | 'valorTotal' | 'status'>;

const valoresIniciais: DadosFormulario = {
  descricaoDefeito: '',
  valorTotal: 0,
  status: 'aberta',
};

export function FormularioOrdemServico() {
  const [dados, setDados] = useState<DadosFormulario>(valoresIniciais);
  const [enviado, setEnviado] = useState(false);

  function aoDigitarDescricao(evento: React.ChangeEvent<HTMLInputElement>) {
    setDados({ ...dados, descricaoDefeito: evento.target.value });
    setEnviado(false);
  }

  function aoDigitarValor(evento: React.ChangeEvent<HTMLInputElement>) {
    setDados({ ...dados, valorTotal: Number(evento.target.value) });
    setEnviado(false);
  }

  function aoMudarStatus(evento: React.ChangeEvent<HTMLSelectElement>) {
    setDados({ ...dados, status: evento.target.value as DadosFormulario['status'] });
    setEnviado(false);
  }

  function aoClicarRegistrar(evento: React.MouseEvent<HTMLButtonElement>) {
    evento.preventDefault();
    setEnviado(true);
  }

  return (
    <section>
      <h2>Nova ordem de serviço</h2>
      <form>
        <label>
          Defeito
          <input type="text" value={dados.descricaoDefeito} onChange={aoDigitarDescricao} />
        </label>
        <label>
          Valor
          <input type="number" value={dados.valorTotal} onChange={aoDigitarValor} />
        </label>
        <label>
          Status
          <select value={dados.status} onChange={aoMudarStatus}>
            <option value="aberta">Aberta</option>
            <option value="em andamento">Em andamento</option>
            <option value="finalizada">Finalizada</option>
          </select>
        </label>
        <button onClick={aoClicarRegistrar}>Registrar</button>
      </form>

      <p>
        Pré-visualização: {dados.descricaoDefeito || '(sem descrição)'} — R$ {dados.valorTotal.toFixed(2)} — {dados.status}
      </p>

      {enviado && <p>Ordem de serviço registrada!</p>}
    </section>
  );
}
