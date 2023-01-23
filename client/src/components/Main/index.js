import React, { useEffect, useState } from 'react';
import CardProduto from '../CardProduto';
import Column from '../Column';
import * as C from './style';

function Main({ pedidos, pageRender, produtos }) {

    if(pageRender === "Pedidos" && pedidos.length > 0){
        return (
            <C.ContainerPedidos>
                <Column produtos={produtos} title='19:30' pedidos={pedidos.filter(e => e.horaEntrega === "19:30")}/>
                <Column produtos={produtos} title='20:00' pedidos={pedidos.filter(e => e.horaEntrega === "20:00")}/>
                <Column produtos={produtos} title='20:30' pedidos={pedidos.filter(e => e.horaEntrega === "20:30")}/>
                <Column produtos={produtos} title='21:00' pedidos={pedidos.filter(e => e.horaEntrega === "21:00")}/>
                <Column produtos={produtos} title='21:30' pedidos={pedidos.filter(e => e.horaEntrega === "21:30")}/>
            </C.ContainerPedidos>
        )
    }

    if(pageRender === "Produtos"){
        return (
            <C.ContainerProdutos>
                {produtos.map( produto => (
                    <CardProduto key={produto.id} produto={produto}/>
                ))}
            </C.ContainerProdutos>
        )
    }

    if(pageRender === "Pagamentos"){
        return (<div>Pagamentos</div>)
    }

    if(pageRender === "Controle Interno"){
        return (<div>Controle Interno</div>)
    }
    
}

export default Main
