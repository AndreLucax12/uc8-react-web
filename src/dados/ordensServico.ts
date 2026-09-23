import type { OrdemServico } from '../types/entidades';

const ordensServico: OrdemServico[] = [
  {
    id: 1,
    equipamentoId: 1,
    descricaoDefeito: 'Tela quebrada',
    status: 'em andamento',
    valorTotal: 150.0,
    dataAbertura: '2024-06-01',
  },
  {
    id: 2,
    equipamentoId: 2,
    descricaoDefeito: 'Bateria não carrega',
    status: 'finalizada',
    valorTotal: 80.0,
    dataAbertura: '2024-05-15',
  },
  {
    id: 3,
    equipamentoId: 3,
    descricaoDefeito: 'Não liga',
    status: 'aberta',
    valorTotal: 320.0,
    dataAbertura: '2024-06-10',
  },
  {
    id: 4,
    equipamentoId: 1,
    descricaoDefeito: 'Alto-falante com chiado',
    status: 'aberta',
    valorTotal: 60.0,
    dataAbertura: '2024-06-12',
  },
];

// Simula uma chamada assíncrona (como um fetch a uma API).
export function buscarOrdensServico(): Promise<OrdemServico[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(ordensServico), 2000);
  });
}
