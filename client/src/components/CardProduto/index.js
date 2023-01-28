import React from 'react';
import * as C from './style';
import * as Config from '../../config/moneyConfig'

function CardProduto({ produto, origem }) {
    let address = `./${produto.nome}.jpg`
    let valor = Config.valueToString(produto.preco);
    return (
        <C.Card className='card' origem={origem}>
            <C.Panel origem={origem}>
                <C.Picture origem={origem} src={address}></C.Picture>
                <C.TitleProduto>{produto.nome}</C.TitleProduto>
                <C.DescProduto origem={origem}>{produto.descricao}</C.DescProduto>
                <C.DescProduto origem={origem}>{valor}</C.DescProduto>
            </C.Panel>
        </C.Card>
    )
}

export default CardProduto
