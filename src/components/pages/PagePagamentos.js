import React, { useEffect, useState } from 'react';
import {
    Table,
    Button
} from 'reactstrap';
import '../../styles/pagePagamentos.css';
import { ObjDateForString } from '../../config/dataParse.js';
import InputCurrency from '../elements/InputCurrency';
import Axios from 'axios';
import configPedido from '../../config/configPedido.js'
import InputObs from '../elements/InputObs';
import SelectPag from '../elements/SelectPag';
import SpanLoading from '../elements/SpanLoading';


function PagePagamentos({pedidos, renderPageControl, data}) {
    const [atualizandoDados, setAtualizandoDados] = useState(false)
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
    var columns = []
    columns.push(pedidosFiltrados.slice(0, Math.ceil(pedidosFiltrados.length / 2)))
    columns.push(pedidosFiltrados.slice(Math.ceil(pedidosFiltrados.length / 2), pedidosFiltrados.length))

    function salvarAlteracoes(){
        var elements = []
        var pedidosAlterados = []
        Array.from(document.querySelector("#tabela1").children[1].children).forEach( e => {
            elements.push(e)
        })
        Array.from(document.querySelector("#tabela2").children[1].children).forEach( e => {
            elements.push(e)
        })

        elements.forEach( e => {
            let element = e.children
            let obj = {
                id: parseInt(element[0].innerHTML),
                cliente: parseInt(element[1].id),
                valor: parseFloat(element[2].children[0].placeholder) / 100,
                pagamento: element[3].children[0].value,
                obs: element[4].children[0].value
            }
            pedidosAlterados.push(obj)
        })

        pedidosAlterados.forEach( (e, i) => {
            setAtualizandoDados(true)
            let pedido = pedidos.find( p => p.idpedidos === e.id)
            Axios.patch('https://api-casa19-c48b6c3b172e.herokuapp.com/pedidos',
                configPedido(
                    e.id,
                    pedido.data,
                    e.cliente,
                    pedido.horaEntrega,
                    pedido.localEntrega,
                    pedido.status,
                    e.pagamento,
                    pedido.carrinho,
                    e.valor,
                    e.obs
                )
                ).then((response) => {
                    //console.log(response);
                }).catch((err) => {
                    //console.log(err);
                })
            })
        setTimeout(() => {
            setAtualizandoDados(false)
            renderPageControl('pedidos')
        }, 1000);
    }

    console.log(pedidos);

    return (
        <div className='w-100 d-flex'>
            {atualizandoDados && (<SpanLoading/>)}
            {columns.map( (j, index) => {
                return (
                    <div key={index} className='col-6'>
                        <Table id={`tabela${index+1}`} hover className='border border-3 fs-10'>
                            <thead>
                                <tr>
                                    <th>Id</th>                            
                                    <th>Nome</th>                            
                                    <th className='w-10 text-center'>Valor</th>                            
                                    <th>Pagamento</th>
                                    <th>Obs</th>
                                </tr>
                            </thead>
                            <tbody>
                                {j.map( (e, i) => {
                                    return (
                                        <tr key={i} className={e.pagamento === 'Pago' ? 'bg-white' : 'bg-danger-subtle'}>
                                            <th>{e.idpedidos}</th>
                                            <td id={e.cliente}>{e.nome}</td>
                                            <td className='w-10 text-center'>
                                                <InputCurrency tabindex={index === 0 ? i : i + columns[0].length} valorPedido={e.valor}/>
                                            </td>
                                            <td>
                                                <SelectPag pedido={e} index={i}/>
                                            </td>
                                            <td>
                                                <InputObs pedido={e} index={i}/>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                )
            })}
            <div className='btnSalvar fs-10 d-flex align-items-center rounded justify-content-center'>
                <Button onClick={salvarAlteracoes} className='w-100 h-100' color='primary'>Salvar alterações</Button>
            </div>
        </div>
    )
}

export default PagePagamentos