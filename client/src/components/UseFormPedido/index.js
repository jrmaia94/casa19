import React from 'react';
import * as C from './style'

function UseFormPedido() {
    return (
        <C.Container>
            <C.Label for='nome'>Nome</C.Label>
            <C.Input name='nome' id='nome'/>
            <br/>
            <C.Label for='addr'>Endereço</C.Label>
            <C.Input name='addr' id='addr'/>
            <br/>
            <C.Label for='fone'>Telefone</C.Label>
            <C.Input name='fone' id='fone'/>
        </C.Container>
    )
}

export default UseFormPedido
