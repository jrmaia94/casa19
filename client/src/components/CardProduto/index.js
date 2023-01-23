import React from 'react';
import * as C from './style';
import * as Config from '../../config/moneyConfig'

function CardProduto({ produto }) {
    let address = `./${produto.nome}.jpg`
    let valor = Config.valueToString(produto.valor);
    return (
        <C.Card>
            <C.Picture src={address}></C.Picture>
            <C.TitleProduto>{produto.nome}</C.TitleProduto>
            <C.DescProduto>{produto.desc}</C.DescProduto>
            <C.DescProduto>{valor}</C.DescProduto>
        </C.Card>
    )
}

export default CardProduto
