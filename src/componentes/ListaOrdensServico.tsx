import { useEffect, useState } from 'react';
import type { OrdemServico } from '../types/entidades';
import { buscarOrdensServico } from '../dados/ordensServico';
import { CartaoOrdemServico } from './CartaoOrdemServico';

export function ListaOrdensServico() {
  const [ordens, setOrdens] = useState<OrdemServico[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    let ativo = true;

    buscarOrdensServico().then((resultado) => {
      if (!ativo) return;
      setOrdens(resultado);
      setCarregando(false);
    });

    return () => {
      ativo = false;
    };
  }, []);

  return (
    <section>
      <h2>Ordens de serviço</h2>
      {carregando && <p>Carregando ordens de serviço...</p>}
      {!carregando && ordens.length === 0 && <p>Nenhuma ordem de serviço encontrada.</p>}
      {ordens.map((ordem) => (
        <CartaoOrdemServico key={ordem.id} ordemServico={ordem} valorAlerta={100} />
      ))}
    </section>
  );
}
