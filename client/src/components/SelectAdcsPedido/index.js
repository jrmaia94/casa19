import React from 'react';
import CardAdcs from '../CardAdcs';
import * as C from './style'


function SelectAdcPedido({ adicionais }) {
    console.log(adicionais)
    return (
        <C.Container>
            {adicionais.map( (e, index) => (
                <CardAdcs key={index} adicional={e} origem='form'/>
            ))}
        </C.Container>
    )
}

export default SelectAdcPedido
