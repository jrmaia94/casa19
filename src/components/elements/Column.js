import React from "react";
import {
    Button,
    Card,
    CardTitle,
    CardText,
    Container,
    Row,
    Col,
    Table
} from 'reactstrap';
import CardPedido from "./CardPedido";

function Column({ deletePedido, pedidos, titulo, produtos, dragEnd, dragStart, dragLeave, setAtualizandoDados }){

    function dragLeaveChild(e){
        e.stopPropagation()
    }

    return (
        <Col id={titulo} onDragLeave={dragLeave} className='colunasHorarios p-2 h-100'>
            <Card onDragLeave={dragLeaveChild} className="d-flex">
                <h1 className='text-center fs-4 m-0 p-0'>{titulo}</h1>
            </Card>
            {pedidos.map( e => (<CardPedido deletePedido={deletePedido} setAtualizandoDados={setAtualizandoDados} onDragLeave={dragLeaveChild} dragEnd={dragEnd} dragStart={dragStart} produtos={produtos} key={e.idpedidos} id={e.idpedidos} pedido={e}/>))}
        </Col>
    )
}

export default Column;