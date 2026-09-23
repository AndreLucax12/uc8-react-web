import { Cabecalho } from './componentes/Cabecalho';
import { Rodape } from './componentes/Rodape';
import type { OrdemServico } from './types/entidades';
import { CartaoOrdemServico } from './componentes/CartaoOrdemServico';
import { FormularioOrdemServico } from './componentes/FormularioOrdemServico';
import { ListaOrdensServico } from './componentes/ListaOrdensServico';

const os1: OrdemServico = {
  id: 1,
  equipamentoId: 1,
  descricaoDefeito: 'Tela quebrada',
  status: 'em andamento',
  valorTotal: 150.0,
  dataAbertura: '2024-06-01',
};

const os2: OrdemServico = {
  id: 2,
  equipamentoId: 2,
  descricaoDefeito: 'Bateria não carrega',
  status: 'finalizada',
  valorTotal: 80.0,
  dataAbertura: '2024-05-15',
};


export default function App() {
  return (
    <main>
      <Cabecalho />
      <CartaoOrdemServico ordemServico={os1} valorAlerta={100} />
      <CartaoOrdemServico ordemServico={os2} valorAlerta={100} />
      <FormularioOrdemServico />
      <ListaOrdensServico />
      <Rodape />
    </main>
  );
}
