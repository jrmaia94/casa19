import React from 'react'
import CardProduto from '../CardProduto'

function SelectOptionPedido({ produtos }) {
    return (
        <>
            {produtos.map( produto => (
                <CardProduto key={produto.id} produto={produto}/>
            ))}
        </>
    )
}

export default SelectOptionPedido
