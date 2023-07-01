import React, { useState, useEffect } from 'react';
import {
    Container,
    Row
} from 'reactstrap';
import Column from '../elements/Column';
import { AiFillPlusCircle } from 'react-icons/ai';
import '../../styles/pagePedidos.css';
<<<<<<< HEAD
import {ObjDateForString, StrDateForObj} from '../../config/dataParse';
=======
import {ObjDateForString} from '../../config/dataParse';
>>>>>>> 8b2930b185456ecc4f462a4502209c1480559f42
import configPedido from '../../config/configPedido';
import Axios from 'axios';
import SpanLoading from '../elements/SpanLoading'
import Alert from '../elements/Alert';

function PagePedidos({setPedidos, data, functOnClick, pedidos, produtos}){

    const [atualizandoDados, setAtualizandoDados] = useState(false)
    const [confirmarDeletePedido, setConfirmarDeletePedido] = useState(false)
    const [dados, setDados] = useState()
    var colunaDestino
    function dragStart(e){
        e.target.classList.add('arrastando')
    }

    function dragLeave(e){
        colunaDestino = e.target.id
    }

    function dragEnd(e){
        e.target.classList.remove('arrastando')
        let idPedido = parseInt(e.target.id);
        let pedido = pedidos.find(e => e.idpedidos === idPedido)
        if(pedido.horaEntrega === colunaDestino) return
        if(['19:30', '20:00', '20:30', '21:00', '21:30'].includes(colunaDestino)){
            pedido.horaEntrega = colunaDestino
            setAtualizandoDados(true)
<<<<<<< HEAD
            Axios.patch('https://api-casa19-c48b6c3b172e.herokuapp.com/pedidos',
=======
            Axios.patch('http://localhost:3001/pedidos',
>>>>>>> 8b2930b185456ecc4f462a4502209c1480559f42
                configPedido(
                    pedido.idpedidos,
                    pedido.data,
                    pedido.cliente,
                    pedido.horaEntrega,
                    pedido.localEntrega,
                    pedido.status,
                    pedido.pagamento,
                    pedido.carrinho,
                    pedido.valor,
                    pedido.obs
                )).then((response) => {
                    setTimeout(() => {
                        setAtualizandoDados(false)
                    }, 1000);
                }).catch((err) => {
                    setTimeout(() => {
                        setAtualizandoDados(false)
                    }, 1000);
                })
        }
    }
<<<<<<< HEAD

    const [pedidosFiltrados, setPedidosFiltrados] = useState([])
    useEffect(() => {
        setPedidosFiltrados(() => {
            const newObj = []
            pedidos.forEach( e => {
                let date = new Date(e.data)
                date = ObjDateForString(new Date(date.setDate(date.getDate()+1)))
                date === data && newObj.push(e)
            })            
            return newObj
        })
        
    }, [pedidos, data])
=======
    
    const pedidosFiltrados = pedidos.filter( e => ObjDateForString(new Date(e.data)) === data)
>>>>>>> 8b2930b185456ecc4f462a4502209c1480559f42
    var idPedido
    var idCarrinho

    function deletePedido(e){
        var btn = e.target
        if(btn.tagName.toString().toUpperCase() === 'PATH'){
            btn = e.target.parentElement
        }
        idPedido = parseInt(btn.parentElement.parentElement.parentElement.parentElement.parentElement.id)
        idCarrinho = parseInt(btn.parentElement.parentElement.parentElement.parentElement.id)
        var qtdCompras = JSON.parse(pedidosFiltrados.find(j => j.idpedidos === idPedido).carrinho).length
        if(qtdCompras > 1){
            let nomeCLiente = pedidosFiltrados.find( p => p.idpedidos === idPedido).nome
            setDados({
                titulo: "Confirmar exclusão do pedido?",
                texto: `Excluir apenas 1 ou todos os ${qtdCompras} pedidos do(a) cliente ${nomeCLiente}?`,
                buttons: [
                    {
                        id: 'btn1',
                        titulo: 'Apenas 1',
                        type: 'secondary',
                        function: hadleClickAlert
                    },
                    {
                        id: 'btn2',
                        titulo: 'Todos',
                        type: 'danger',
                        function: hadleClickAlert
                    },
                    {
                        id: 'btn3',
                        titulo: 'Cancelar',
                        type: 'success',
                        function: hadleClickAlert
                    }
                ]
            })
            setConfirmarDeletePedido(true)
        }else{
            setAtualizandoDados(true)
<<<<<<< HEAD
            Axios.delete(`https://api-casa19-c48b6c3b172e.herokuapp.com/pedidos/${idPedido}`)
=======
            Axios.delete(`http://localhost:3001/pedidos/${idPedido}`)
>>>>>>> 8b2930b185456ecc4f462a4502209c1480559f42
                .then((response) => {
                    setTimeout(() => {
                        setAtualizandoDados(false)
                        setPedidos(prevObj => {
                            var newObj = [...prevObj]
                            newObj = newObj.filter( p => p.idpedidos !== idPedido)
                            return newObj
                        })
                    }, 500);
                }).catch((err) => {
                    setTimeout(() => {
                        setAtualizandoDados(false)
                    }, 500);
                })
        }
    }

    function hadleClickAlert(e){
        if(e.target.id === 'btn1'){
            setAtualizandoDados(true)
            var pedido = pedidosFiltrados.find( p => p.idpedidos === idPedido)
            var carrinho = JSON.stringify(JSON.parse(pedidosFiltrados.find( p => p.idpedidos === idPedido).carrinho).filter( c => c.id !== idCarrinho))
            pedido.carrinho = carrinho
            
<<<<<<< HEAD
            Axios.patch('https://api-casa19-c48b6c3b172e.herokuapp.com/pedidos',
=======
            Axios.patch('http://localhost:3001/pedidos',
>>>>>>> 8b2930b185456ecc4f462a4502209c1480559f42
                configPedido(
                    pedido.idpedidos,
                    pedido.data,
                    pedido.cliente,
                    pedido.horaEntrega,
                    pedido.localEntrega,
                    pedido.status,
                    pedido.pagamento,
                    pedido.carrinho,
                    pedido.valor,
                    pedido.obs
                )
                ).then((response) => {
                    setTimeout(() => {
                        setAtualizandoDados(false)
                        setPedidos(prevObj => {
                            var newObj = [...prevObj]
                            newObj = newObj.filter( p => p.idpedidos !== idPedido)
                            newObj.push(pedido)
                            return newObj
                        })
                    }, 500)
                    setConfirmarDeletePedido(false)                        
                }).catch((err) => {
                    setTimeout(() => {
                        setAtualizandoDados(false)
                    }, 500);
                    setConfirmarDeletePedido(false)                        
                })
        }else if(e.target.id === 'btn2'){
            setAtualizandoDados(true)
<<<<<<< HEAD
            Axios.delete(`https://api-casa19-c48b6c3b172e.herokuapp.com/pedidos/${idPedido}`)
=======
            Axios.delete(`http://localhost:3001/pedidos/${idPedido}`)
>>>>>>> 8b2930b185456ecc4f462a4502209c1480559f42
                .then((response) => {
                    setTimeout(() => {
                        setAtualizandoDados(false)
                        setPedidos(prevObj => {
                            var newObj = [...prevObj]
                            newObj = newObj.filter( p => p.idpedidos !== idPedido)
                            return newObj
                        })
                    }, 500);
                    setConfirmarDeletePedido(false)
                }).catch((err) => {
                    setTimeout(() => {
                        setAtualizandoDados(false)
                    }, 500);
                    setConfirmarDeletePedido(false)
                })
        }else if(e.target.id === 'btn3'){
            setConfirmarDeletePedido(false)
        }
    }

    return(
        <>
            {confirmarDeletePedido && (
                <Alert
                    tipoAlerta='confirmacao'
                    dados={dados}
                />
            )}
            {atualizandoDados && (<SpanLoading/>)}
            <Container className='d-block bg-warning-subtle'  style={{fontSize:'12px', minWidth:'100%', height:'80%'}}>
                <Row className='m-0 p-0 w-100 d-flex justify-content-center align-items-start h-100'>
                    <Column deletePedido={deletePedido} setAtualizandoDados={setAtualizandoDados} dragLeave={dragLeave} dragEnd={dragEnd} dragStart={dragStart} key='horario-1' produtos={produtos} pedidos={pedidosFiltrados.filter(e => e.horaEntrega === "19:30")} titulo='19:30'/>
                    <Column deletePedido={deletePedido} setAtualizandoDados={setAtualizandoDados} dragLeave={dragLeave} dragEnd={dragEnd} dragStart={dragStart} key='horario-2' produtos={produtos} pedidos={pedidosFiltrados.filter(e => e.horaEntrega === "20:00")} titulo='20:00'/>
                    <Column deletePedido={deletePedido} setAtualizandoDados={setAtualizandoDados} dragLeave={dragLeave} dragEnd={dragEnd} dragStart={dragStart} key='horario-3' produtos={produtos} pedidos={pedidosFiltrados.filter(e => e.horaEntrega === "20:30")} titulo='20:30'/>
                    <Column deletePedido={deletePedido} setAtualizandoDados={setAtualizandoDados} dragLeave={dragLeave} dragEnd={dragEnd} dragStart={dragStart} key='horario-4' produtos={produtos} pedidos={pedidosFiltrados.filter(e => e.horaEntrega === "21:00")} titulo='21:00'/>
                    <Column deletePedido={deletePedido} setAtualizandoDados={setAtualizandoDados} dragLeave={dragLeave} dragEnd={dragEnd} dragStart={dragStart} key='horario-5' produtos={produtos} pedidos={pedidosFiltrados.filter(e => e.horaEntrega === "21:30")} titulo='21:30'/>
                </Row>
                <button id='adcPedido' onClick={() => functOnClick('adcPedido')} color='primary' className='border-0 m-0 p-0 rounded-circle position-absolute z-3 bottom-0 end-0 m-4'>
                    <AiFillPlusCircle className='btnHover fs-1 text-primary z-2'/>
                </button>
            </Container>
        </>
    )
}

export default PagePedidos