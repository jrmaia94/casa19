import React from 'react';
import CardProduto from '../CardProduto';
import * as C from './style';

function SelectOptionPedido({ produtos }) {
    console.log(produtos);
    return (
        <C.BoxOptions>
            {produtos.map( (produto, index) => (
                <CardProduto origem="form" key={index} produto={produto}/>
            ))}
        </C.BoxOptions>
    )
}

export default SelectOptionPedido
