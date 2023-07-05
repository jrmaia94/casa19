import React, { useState } from 'react';
import '../../styles/contadorDeBurgs.css'

function ContadorBurgs({pedidos, produtos}) {
    var burgs = []
    produtos.forEach( e => {
        burgs.push({
            nome: e.nome,
            qtd: 0,
            cor: e.cor            
        })
    })
    var compras = []
    pedidos.forEach( e => {
        JSON.parse(e.carrinho).forEach( c => {
            compras.push(c)
        })
    })

    compras.forEach( e => {
        produtos.forEach( i => {
            if(e.opcao === i.idprodutos){
                let qtd = isNaN(e.qtd) ? parseInt(e.qtd.substring(0,1)) : e.qtd
                if(isNaN(e.qtd)) burgs.find(e => e.nome === 'Classic').qtd = burgs.find(e => e.nome === 'Classic').qtd + parseInt(e.qtd.split("x")[0]) * (parseInt(e.qtd.split("x")[1]) - 1)
                burgs.find(e => e.nome === i.nome).qtd = burgs.find(e => e.nome === i.nome).qtd + qtd
            }
        })     
    })

    function blurInput(e){
        var controleId = e.target.id.replace('Fabricados', '')
        document.querySelector(`#${controleId}Restantes`).value = e.target.value - document.querySelector(`#${controleId}Vendidos`).value
    }

    function changeInput(e){
        console.log(e);
    }

    return (
        <div className='contadorDeBurgs w-20 rounded p-2 bg-warning d-flex justify-content-center align-itens-center'>
            <div className=''>
                <div className='m-2 d-flex justify-content-center align-itens-center'>
                    <div className='fw-bold fs-10 w-25'>Opção</div>
                    <div className='fw-bold fs-10 w-25 d-flex justify-content-center align-itens-center'>Vendidos</div>
                    <div className='fw-bold fs-10 w-25 d-flex justify-content-center align-itens-center'>Fabricados</div>
                    <div className='fw-bold fs-10 w-25 d-flex justify-content-center align-itens-center'>Restantes</div>
                </div>
                {burgs.map( (e, i) => (
                    <div key={i} className='d-flex justify-content-center align-itens-center'>
                        <div className='fs-10 w-25 d-flex justify-content-start align-itens-center'>{e.nome}</div>
                        <div className='w-25 d-flex justify-content-center align-itens-center'><input autoComplete='off' type='number' id={`${e.nome}Vendidos`} onChangeCapture={changeInput} onFocus={e => e.target.blur()} readOnly className='w-50 fs-10 text-center' value={e.qtd}/></div>
                        <div className='w-25 d-flex justify-content-center align-itens-center'><input tabIndex={i+100} autoComplete='off' type='number' id={`${e.nome}Fabricados`} onBlur={blurInput} className='fs-10 w-50 text-center'/></div>
                        <div className='w-25 d-flex justify-content-center align-itens-center'><input tabIndex={burgs.length + 100 + i} autoComplete='off' type='number' id={`${e.nome}Restantes`} className='fs-10 w-50 text-center'/></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContadorBurgs
