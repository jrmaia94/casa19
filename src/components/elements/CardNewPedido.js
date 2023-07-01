import React from 'react';
import { NumberMoneyForStr } from '../../config/configMoney'
import '../../styles/cardNewPedido.css'

function CardNewPedido({compra, index, produtos, pontosCarne, editarCompra}) {
    const element = compra
    const opcao = produtos.find( e => e.idprodutos === element.opcao)
    var ponto
    element.pontoCarne === 'AP' ? ponto = '' : ponto = pontosCarne.find( e => e.abrev === element.pontoCarne).ponto
    var styleAdc = {}
    if(element.adc.length > 3){
        styleAdc = {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
        }
    }
            return(
                <>
                    <div
                        id={`compra${element.id}`}
                        onDoubleClick={editarCompra}
                        className={
                            opcao
                            ? `compra d-flex align-items-center ${opcao.cor}`
                            : 'compra d-flex align-items-center'
                        }
                    >
                        <div className='w-50'>
                            <div className='first d-flex justify-content-start align-items-center'>
                                <p className='m-0 mx-1 fs-3'>{element.qtd}</p>
                                <p className='m-0 mx-1 fs-3'>{opcao.nome}</p>
                            </div>
                            <div className='first'>
                                <p className='fs-8 m-0 mx-1'>{ponto}</p>
                            </div>
                        </div>
                        <div className='w-15'>
                            <div
                                className='first'
                                style={styleAdc}>
                                {element.adc.map( (e, j) => {
                                    let texto = e.abrev
                                    for(let i = 1; i <= e.qtd; i++){
                                        texto = `+${texto}`
                                    }
                                    return (<p className='m-0 p-0 mx-1 fs-10' key={`adc-${j}`}>{texto}</p>)
                                })}
                            </div>
                        </div>
                        <div className='w-20'>
                            <p className='m-0 p-0'>{NumberMoneyForStr(element.valor)}</p>
                        </div>
                    </div>
                </>
            )
}

export default CardNewPedido