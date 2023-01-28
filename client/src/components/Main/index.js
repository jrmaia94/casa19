import React, { useEffect, useState } from 'react';
import CardProduto from '../CardProduto';
import Column from '../Column';
import * as C from './style';
import { FaPlus } from 'react-icons/fa';
import FormNovoPedido from '../FormNovoPedido';

function Main({ pedidos, pageRender, produtos, adicionais }) {
    
    const [ showForm, setShowForm ] = useState(false)

    function callForm(){
        setShowForm(true)
    }

    const handler = (event) => {
        console.log("teste");
        if(event.key === "Escape") setShowForm(false)
    }

    if(pageRender === "Pedidos" && pedidos.length > 0){
        return (
            <C.ContainerPedidos>
                <Column produtos={produtos} title='19:30' pedidos={pedidos.filter(e => e.horaEntrega === "19:30")}/>
                <Column produtos={produtos} title='20:00' pedidos={pedidos.filter(e => e.horaEntrega === "20:00")}/>
                <Column produtos={produtos} title='20:30' pedidos={pedidos.filter(e => e.horaEntrega === "20:30")}/>
                <Column produtos={produtos} title='21:00' pedidos={pedidos.filter(e => e.horaEntrega === "21:00")}/>
                <Column produtos={produtos} title='21:30' pedidos={pedidos.filter(e => e.horaEntrega === "21:30")}/>
                <C.BtnAdd onClick={callForm}>
                    <FaPlus/>
                </C.BtnAdd>

                {showForm && (
                    <C.ContainerForm onKeyDown={e => handler(e)}>
                        <FormNovoPedido adicionais={adicionais} produtos={produtos}/>
                    </C.ContainerForm>
                )}
            </C.ContainerPedidos>
        )
    }

    if(pageRender === "Produtos"){
        return (
            <C.ContainerProdutos>
                {produtos.map( produto => (
                    <CardProduto key={produto.idprodutos} produto={produto}/>
                ))}
                <C.BtnAdd onClick={callForm}>
                    <FaPlus/>
                </C.BtnAdd>
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
