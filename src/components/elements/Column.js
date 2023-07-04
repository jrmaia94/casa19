import React, { useState } from "react";
import {
    Card,
    Col
} from 'reactstrap';
import CardPedido from "./CardPedido";
import '../../styles/column.css'

function Column({ adicionais, deletePedido, pedidos, titulo, produtos, dragEnd, dragStart, dragLeave, setAtualizandoDados }){

    function dragLeaveChild(e){
        e.stopPropagation()
    }

    var compras = []
    pedidos.forEach( e => {
        JSON.parse(e.carrinho).forEach( c => {
            compras.push(c)
        })
    })

    var burgs = []
    var adcs = {}
    produtos.forEach( e => {
        burgs.push({
            nome: e.nome,
            qtd: 0,
            cor: e.cor            
        })
    })
    adicionais.forEach( e => {
        adcs[e.abrev] = 0
    })

    compras.forEach( e => {
        produtos.forEach( i => {
            if(e.opcao === i.idprodutos){
                let qtd = isNaN(e.qtd) ? parseInt(e.qtd.substring(0,1)) : e.qtd
                if(isNaN(e.qtd)) burgs.find(e => e.nome === 'Classic').qtd = burgs.find(e => e.nome === 'Classic').qtd + parseInt(e.qtd.split("x")[0]) * (parseInt(e.qtd.split("x")[1]) - 1)
                burgs.find(e => e.nome === i.nome).qtd = burgs.find(e => e.nome === i.nome).qtd + qtd
            }
        })

        e.adc.forEach( a => {
            adcs[a.abrev] = adcs[a.abrev] + a.qtd
        })        
    })

    return (
        <Col id={titulo} onDragLeave={dragLeave} className='colunasHorarios p-2 h-100'>
            <Card onDragLeave={dragLeaveChild} className="boxDescr">
                <h1 className='text-center fs-4 m-0 p-0'>{titulo}</h1>
                <div id="boxInfos" className="boxInfos bg-warning bg-gradient p-1 align-items-center rounded">
                    <div className="w-35 h-100">
                        {burgs.map( (e, index) => {
                            if(e.qtd > 0){
                                return (
                                    <div key={`div${index}`} className="bg-white h-100 d-flex justify-content-between border rounded p-1">
                                        <label key={`label${index}`} className="m-0 p-0">{e.nome}</label>
                                        <input readOnly key={`input${index}`} className="text-center m-0 ms-1 p-0 border-0 w-35" value={e.qtd}/>
                                    </div>
                                )
                            }else{
                                return <div className="d-none" key={index}></div>
                            }
                        })}
                    </div>
                    <div className="boxAdcs w-65 h-100">
                        {Object.keys(adcs).map( (chave, index) => {
                            if(adcs[chave] > 0){
                                return (
                                    <div key={`div${index}`} className="bg-white d-flex justify-content-between border rounded p-1">
                                        <label key={`label${index}`} className="m-0 p-0">{chave}</label>
                                        <input readOnly key={`input${index}`} className="text-center w-35 m-0 ms-1 p-0 border-0" value={adcs[chave]}/>
                                    </div>
                                )
                            }else{
                                return <div className="d-none" key={index}></div>
                            }
                        })}
                    </div>
                </div>
            </Card>
            {pedidos.map( e => (<CardPedido deletePedido={deletePedido} setAtualizandoDados={setAtualizandoDados} onDragLeave={dragLeaveChild} dragEnd={dragEnd} dragStart={dragStart} produtos={produtos} key={e.idpedidos} id={e.idpedidos} pedido={e}/>))}
        </Col>
    )
}

export default Column;