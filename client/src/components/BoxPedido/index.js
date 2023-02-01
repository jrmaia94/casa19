import React from 'react';
import * as C from './style';
import CardPedido from '../CardPedido';
import useViewer from '../../hooks/useViewer';

function BoxPedido({ pedido, produtos }) {

    const { exibirCard, toggleExibirCard} = useViewer()

    if(typeof(pedido.carrinho) === "string") pedido.carrinho = JSON.parse(pedido.carrinho);

    let cor= "black"
    
    return (
        pedido.carrinho.map( (lanche, index) => {
            
            if(produtos.length > 0) cor = produtos.find(prod => prod.idprodutos === lanche.opcao).cor
            return (
            <C.Item
                hover={exibirCard}
                onMouseEnter={e => toggleExibirCard(e)}
                onMouseLeave={e => toggleExibirCard(e)}
                key={`${pedido.idpedidos}${index}`}
                id={`${pedido.idpedidos}-${index}`}
                cor={cor}>
                {exibirCard ? 
                    <>
                        <CardPedido produtos={produtos} pedido={pedido} />
                    </>
                :
                    <>
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
                    </>
                }
    
            </C.Item>
            )
        })
    )
}

export default BoxPedido
