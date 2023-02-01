import React from 'react';
import * as C from './style';

function CardAdcs({ adicional, origem }) {
    let address = `./${adicional.abrev}.png`
    return (
        <C.Card className='card' origem={origem}>
            <C.Panel origem={origem}>
                <C.Picture origem={origem} src={address}></C.Picture>
                <C.TitleAdc>{adicional.nome} ({adicional.abrev})</C.TitleAdc>
            </C.Panel>
        </C.Card>
    )
}

export default CardAdcs
