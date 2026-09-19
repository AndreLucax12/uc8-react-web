import type { OrdemServico } from "../types/entidades";

interface CartaoOrdemServicoProps {
  ordemServico: OrdemServico;
  valorAlerta?: number;
}

export function CartaoOrdemServico({ ordemServico, valorAlerta = 200 }: CartaoOrdemServicoProps) {
  return (
    <article>
      <h2>{ordemServico.descricaoDefeito}</h2>
      <p>{ordemServico.equipamentoId}</p>
      <p>{ordemServico.status}</p>
      <p>R$ {ordemServico.valorTotal.toFixed(2)}</p>
      <p>{ordemServico.dataAbertura}</p>
      {ordemServico.valorTotal > valorAlerta && <p>Valor acima do limite!</p>}
    </article>
  );
}
