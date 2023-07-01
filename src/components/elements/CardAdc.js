import React, { useEffect } from 'react';
import {
    Card,
    CardImg,
    CardText,
    Input
} from 'reactstrap';

function CardAdc({adicional, handleAdcs}) {
    return (
        <>
            <Card
                onContextMenu={e => e.preventDefault()}
                onClick={handleAdcs}
                onAuxClick={handleAdcs}
                id={`adc${adicional.id}`}
                className={
                    adicional.qtd > 0
                    ? 'active adcs w-8 d-flex align-items-center text-center'
                    : 'adcs w-8 d-flex align-items-center text-center'}
            >
                <div className='h-75 d-flex align-items-center'>
                    <CardImg className='' alt={adicional.nome} src={process.env.PUBLIC_URL + `/${adicional.abrev}.png`}/>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <CardText className='fs-10 m-0 p-0'>{adicional.nome}</CardText>
                    <Input onFocus={ e => e.target.blur()} readOnly value={adicional.qtd} min={0} max={10} className='lh-base inputAdicionais fs-10 m-0 p-0 w-75 text-center' type="number"/>
                </div>
            </Card>
        </>
    )
}

export default CardAdc
