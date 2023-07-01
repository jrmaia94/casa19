import React, { useEffect, useState } from 'react';
import {
    Card,
} from 'reactstrap';
import {IoTrashOutline} from 'react-icons/io5';
import '../../styles/pagePedidos.css';
import Axios from 'axios';

function LinhaPedido({ deletePedido, setAtualizandoDados, pedido, nome, produtos, pedidoOriginal, dragEnd, dragStart }) {

    const [className, setClassName] = useState('m-0 p-0 table-borderless') 
    const [opcao, setOpcao] = useState({"cor": "black"})
    useEffect(() => {
        setOpcao(produtos[pedido.opcao-1])
        opcao === undefined ? setClassName('m-0 p-0 table-borderless') : setClassName(`m-0 p-0 table-borderless ${opcao.cor}`)
    }, [pedido, produtos, opcao])
    let descr
    const adc = pedido.adc
    var qtd = pedido.qtd
    var adcBurg = pedido.adc.find(e => e.abrev === 'burg')
    if(adcBurg){
        if(adcBurg.qtd > 0) descr = `${qtd}x${adcBurg.qtd + 1} ${nome}`
    }else{
        descr = `${qtd} ${nome}`
    }

    var styleAdc = {
    }

    if(adc.length > 3){
        styleAdc = {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
        }
    }

    var adcs = []

    
    adc.map( e => {
        var adic = e.abrev
        for(let i = 0; i < e.qtd; i++){
            adic = `+${adic}`
        }
        adcs.push(adic)
    })

    function dragLeaveChild(e){
        e.stopPropagation()
    }

    return (
        <Card onDragLeave={dragLeaveChild} onDragEnd={dragEnd} onDragStart={dragStart} id={pedidoOriginal.idpedidos} draggable={true} className='cardPedido d-flex p-1' body>
            <table id={pedido.id} className={className}>
                <tbody className='d-flex align-items-center'>
                    <tr className='col-12 d-flex'>
                        <td className='col-7 m-0 p-0'>
                            <p className='text-nowrap text-truncate fs-5 m-0 p-0'>
                                {descr}
                            </p>
                            {pedido.pontoCarne ==='BP' && (<p className='text-white bg-danger w-18 text-center rounded fw-bold m-0 p-0 ms-3'>{pedido.pontoCarne}</p>)}
                            {pedido.pontoCarne ==='MP' && (<p className='text-white bg-success w-18 text-center rounded fw-bold m-0 p-0 ms-3'>{pedido.pontoCarne}</p>)}
                        </td>
                        <td className='col-4 m-0 p-0 pe-2' style={styleAdc}>
                            {adcs.map( (e,i) => (<div key={`adc-${i}`} className='m-0 p-0 text-end'>{e}</div>))}
                        </td>
                        <td className='btnDelete d-flex col-1 text-end align-items-end'>
                            <IoTrashOutline onClick={deletePedido} className='w-100 text-black'/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Card>
    )
}

export default LinhaPedido