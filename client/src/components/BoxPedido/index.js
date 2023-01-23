import React, { useEffect, useState } from 'react';
import * as C from './style';
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
} from 'react-icons/fa';

function BoxPedido({ pedido, produtos }) {

    if(typeof(pedido.carrinho) === "string") pedido.carrinho = JSON.parse(pedido.carrinho);

    let cor= "black"
    
    return (
        pedido.carrinho.map( (lanche, index) => {
            
            if(produtos.length > 0) cor = produtos.find(prod => prod.idprodutos === lanche.opcao).cor
            return (
            <C.Item key={index} cor={cor}>
                <C.Nome>
                    {lanche.pontoCarne !== "" && (
                        <C.PontoCarne>
                            <p>
                                {lanche.pontoCarne}
                            </p>
                        </C.PontoCarne>
                    )}
                    <p>
                        {lanche.qtd}{lanche.carnes >= 2 ? 'x'+lanche.carnes : ''}  {pedido.nome}
                    </p>
                </C.Nome>
                <C.BoxAdc qtdAdc={lanche.adc.length}>
                    {lanche.adc.map( (e, index) => {
                    return (<C.Adc key={index}>
                            <p>
                                {'+' + e}
                            </p>
                        </C.Adc>)
                    })}
                </C.BoxAdc>
                <C.Obs>
                    <p>{pedido.obs}</p>
                </C.Obs>
    
                {/*Itens que aparecerão no hover*/}
                
                <C.CardPedido><p>Carregou eu aqui</p></C.CardPedido>
    
            </C.Item>
            )
        })
    )
}

export default BoxPedido
