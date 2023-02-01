import React from 'react';
import * as C from './style'

function CardPedido({ produtos, pedido }) {
    
    console.log(produtos)
    console.log(pedido)
    return (
        <C.Card>
            <C.Texto>{pedido.nome}</C.Texto>
            <C.Texto>{pedido.localEntrega}</C.Texto>
            <C.Texto>{pedido.obs}</C.Texto>
            {pedido.carrinho.map( e => {
                let opcao = produtos.filter( i => i.idprodutos === e.opcao)
                (<C.BoxCarrinho>
                    <C.Texto>{e.qtd} {e.carnes >= 2 && 'x2'} {opcao[0].nome}</C.Texto>
                    <C.Texto>+abx</C.Texto>
                    <C.Texto>+bnn</C.Texto>
                </C.BoxCarrinho>
            )})}
        </C.Card>
    )
}

export default CardPedido
