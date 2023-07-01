import React from 'react';
import {
    Card,
    CardImg,
    CardTitle,
    CardText
} from 'reactstrap';

function CardProduto({produto, atualizarOpcaoSelect, opcaoSelect}) {
    return (
        <>
            <Card
                id={produto.nome}
                onClick={atualizarOpcaoSelect}
                className={
                    opcaoSelect.select
                    ? 'burgers d-flex align-items-center text-center active border border-1 border-secondary-subtle'
                    : 'burgers d-flex align-items-center text-center'
                }
            >
                <CardImg className='' alt={produto.descricao} src={process.env.PUBLIC_URL + `/${produto.nome}.jpg`}/>
                <CardTitle tag='h5'>{produto.nome}</CardTitle>
                <CardText className='fs-10'>{produto.descricao}</CardText>
            </Card>
        </>
    )
}

export default CardProduto
