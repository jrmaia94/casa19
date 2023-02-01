import React from 'react';
import BoxPedido from '../BoxPedido';
import * as C from './style';

function Column({ title, pedidos, produtos }) {

    if(pedidos.length > 0){
        return (
            <C.Coluna>
                <C.Titulo>
                    {title}            
                </C.Titulo>
                {pedidos.map( e => (<BoxPedido produtos={produtos} key={e.idpedidos} pedido={e}/>))}
            </C.Coluna>
        )
    }
}

export default Column
