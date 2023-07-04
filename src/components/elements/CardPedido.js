import React from 'react';
import LinhaPedido from './LinhaPedido';

function CardPedido({ deletePedido, pedido, produtos, dragEnd, dragStart, setAtualizandoDados }) {
    const nome = pedido.nome;
    const carrinho = JSON.parse(pedido.carrinho);
    return (
        <>
            {carrinho.map( (e,i) => (<LinhaPedido obs={pedido.obs} deletePedido={deletePedido} setAtualizandoDados={setAtualizandoDados} dragStart={dragStart} dragEnd={dragEnd} pedidoOriginal={pedido} produtos={produtos} key={`${pedido.idpedidos}-${i}`} pedido={e} nome={nome}/>))}
        </>
    )
}

export default CardPedido
