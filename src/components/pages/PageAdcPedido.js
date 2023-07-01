import React, { useState } from 'react';
import '../../styles/pageAdcPedido.css'
import CardProduto from '../elements/CardProduto';
import CardAdc from '../elements/CardAdc';
import SelectPontoCarne from '../elements/SelectPontoCarne';
import CardNewPedido from '../elements/CardNewPedido';
import { 
    AiOutlineArrowRight,
    AiFillPlusCircle,
    AiFillMinusCircle
} from 'react-icons/ai';
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button,
} from 'reactstrap';
import Axios from 'axios';
import SpanLoading from '../elements/SpanLoading';
import { ObjDateForString, StrDateForObj } from '../../config/dataParse'
import ErrorRender from '../elements/ErrorRender';
import ConfirmacaoPedido from '../elements/ConfirmacaoPedido';

function PageAdcPedido({ data, produtos, adicionais, clientes, renderPageControl }) {
    const [horaEntrega, setHoraEntrega] = useState([
        {
            "valor": "19:30",
            "select": true,
        },
        {
            "valor": "20:00",
            "select": false,
        },
        {
            "valor": "20:30",
            "select": false,
        },
        {
            "valor": "21:00",
            "select": false,
        },
        {
            "valor": "21:30",
            "select": false,
        }
    ])
    const [carrinho, setCarrinho] = useState([])
    const [pedido, setPedido] = useState(
        {
            "data": StrDateForObj(ObjDateForString(data)),
            "cliente": "",
            "horaEntrega": "19:30",
            "localEntrega": "",
            "status": '',
            "pagamento": '',
            "carrinho": carrinho,
            "valor": 0,
            "obs": ""
        }
    )
    const [nomeCliente, setNomeCLiente] = useState('')
    const [localEntrega, setLocalEntrega] = useState('')
    const [qtdPedido, setQtdPedido] = useState(1)
    const [opcaoSelect, setOpcaoSelect] = useState(produtos.map(e => {
        let select = false
        if(e.nome === 'Classic'){
            select = true
        }
        return {
            "id": e.idprodutos,
            "nome": e.nome,
            "select": select,
            "valor": e.preco
        }
    }))
    const [adicionaisSelects, setAdicionaisSelects] = useState(adicionais.map( e => {
        const newObj = {
            "id": e.idadicionais,
            "abrev": e.abrev,
            "nome": e.nome,
            "valor": e.valor,
            "qtd": 0
        }
        
        return newObj
    }))    
    const [pontosCarne, setPontosCarne] = useState([
        {
            "ponto": "mal passado",
            "abrev": "MP",
            "select": false
        },
        {
            "ponto": "ao ponto",
            "abrev": "AP",
            "select": true,
        },
        {
            "ponto": "bem passado",
            "abrev": "BP",
            "select": false
        }
    ])
    const [atualizandoDados, setAtualizandoDados] = useState(false)
    const [erroCadPedido, setErroCadPedido] = useState([])
    const [confirmacaoPedido, setConfirmacaoPedido] = useState(false)

    function atualizarPedido(e){
        let valor = e.target.value.trim().replace(/\s+/g, " ");
        //e.target.value = valor

        if(e.target.id === 'inputNome'){
            if([...Array.from(document.querySelector('#clientesDataList').children).map(e => e.value)].includes(valor)){
                setPedido( prevObj => {
                    const newObj = prevObj
                    newObj.cliente = clientes.find( i => i.nome === valor).idclientes
                    return newObj
                })
                setNomeCLiente(valor)
            }else{
                setAtualizandoDados(true)

                Axios.post('https://api-casa19-c48b6c3b172e.herokuapp.com/clientes', {"nome": valor})
                    .then((response) => {
                        setPedido( prevObj => {
                            const newObj = prevObj
                            newObj.cliente = response.data.insertId
                            return newObj
                        })
                        setNomeCLiente(valor)
                        setTimeout(() => {
                            setAtualizandoDados(false)                            
                        }, 1000);
                    }).catch((err) => {
                        console.log(err)
                        setTimeout(() => {
                            setAtualizandoDados(false)                            
                        }, 1000);
                    })
            }
        }else{
            setPedido( prevObj => {
                const newObj = prevObj
                newObj.localEntrega = valor
                return newObj
            })
            setLocalEntrega(valor)
        }
    }

    function atualizarHoraEntrega(e){
        let valor = ''
        if(['LABEL', 'INPUT'].includes(e.target.tagName.toUpperCase())){
            valor = Array.from(e.target.parentElement.children).find( i => i.tagName === 'INPUT').id.replace('time','')
            valor = `${valor.substring(0,2)}:${valor.substring(2)}`
            
        }else if(e.target.tagName.toUpperCase() === 'DIV'){
            valor = Array.from(e.target.children).find( i => i.tagName === 'INPUT').id.replace('time','')
            valor = `${valor.substring(0,2)}:${valor.substring(2)}`
        }

        setHoraEntrega( prevObj => {
            const newObj = [...prevObj]
            newObj.forEach( e => {
                e.valor === valor ? e.select = true : e.select = false
            })

            return newObj
        })
    }

    function atualizarOpcaoSelect(e){
        let id = ''
        if(['IMG', 'H5', 'P'].includes(e.target.tagName.toUpperCase())){
            id = e.target.parentElement.id
        }else if(e.target.tagName.toUpperCase() === 'DIV'){
            id = e.target.id
        }

        setOpcaoSelect( prevObj => {
            const newObj = [...prevObj]
            newObj.forEach( i => {
                i.nome === id ? i.select = true : i.select = false
            })
            return newObj            
        })
    }

    function handleAdcs(e){
        let typeEvent = e.type
        let id = ''
        if(['INPUT', 'P', 'IMG'].includes(e.target.tagName.toUpperCase())){
            id = parseInt(e.target.parentElement.parentElement.id.replace('adc', ''))
        }else if(e.target.tagName.toUpperCase() === 'DIV' && e.target.id.substring(0,3) !== 'adc'){
            id = parseInt(e.target.parentElement.id.replace('adc', ''))
        }else{
            id = parseInt(e.target.id.replace('adc', ''))
        }
        if(typeEvent === 'click'){
            setAdicionaisSelects( prevObj => {
                const newObj = [...prevObj]
                newObj.find( i => i.id === id).qtd ++
                return newObj
            })
        }else if(typeEvent === 'auxclick'){
            adicionaisSelects.find( i => i.id === id).qtd > 0
            && setAdicionaisSelects( prevObj => {
                const newObj = [...prevObj]
                newObj.find( i => i.id === id).qtd --
                return newObj
            })
        }
    }

    function atualizarPontoCarne(e){
        let idLabel = ''
        if(['LABEL', 'INPUT'].includes(e.target.tagName.toUpperCase())){
            idLabel = Array.from(e.target.parentElement.children).find( i => i.tagName === 'LABEL').id
        }else if(e.target.tagName.toUpperCase() === 'DIV'){
            idLabel = Array.from(e.target.children).find( i => i.tagName === 'INPUT').id
        }

        setPontosCarne( prevObj => {
            const newObj = [...prevObj]
            newObj.forEach( e => {
                e.abrev === idLabel ? e.select = true : e.select = false
            })

            return newObj
        })
    }

    function atualizarQtd(e){
        let id = ''
        if(e.target.tagName.toUpperCase() === 'SVG'){
            id = e.target.id
        }else if(e.target.tagName.toUpperCase() === 'PATH'){
            id = e.target.parentElement.id
        }

        if(id === 'minusBtn'){
            qtdPedido > 1
            && setQtdPedido(prevObj => {
                let newObj = prevObj
                newObj--
                return newObj
            })
        }else if(id === 'plusBtn'){
            setQtdPedido(prevObj => {
                let newObj = prevObj
                newObj++
                return newObj
            })
        }
    }

    function adicionarCarrinho(){
        var adcs = []
        var qtd = qtdPedido
        var qtdBurg
        adicionaisSelects.forEach( e => {
            if(e.qtd > 0 && e.abrev !== 'burg'){
                adcs.push(
                    {
                        "abrev": e.abrev,
                        "qtd": e.qtd,
                        "valor": e.valor
                    }
                )
            }else if(e.qtd > 0 && e.abrev === 'burg'){
                qtdBurg = e.qtd + 1
                qtd = `${qtd}x${qtdBurg}`
            }
        })

        var compra = {
            "id": Math.floor(Math.random()*100) + 1,
            "opcao": opcaoSelect.find( e => e.select).id,
            "pontoCarne": pontosCarne.find( e => e.select).abrev,
            "qtd": qtd,
            "adc": adcs,
            "valor": calcularCompra(
                opcaoSelect.find( e => e.select).valor,
                adcs,
                parseInt(qtd.toString().split('x')[0]),
                qtd.toString().length > 2 ? parseInt(qtd.toString().split('x')[1]) - 1 : 0
            ),
        }

        setCarrinho( prevObj => {
            let newObj = [...prevObj]
            newObj.push(compra)
            return newObj
        })

        resetForm()
    }

    function calcularCompra(valorOpcao, adcs, qtd, adcBurg){
        let valor = valorOpcao
        adcs.forEach( e => {
            valor += e.valor * e.qtd
        })

        if(adcBurg > 0) valor += (adcBurg * 8)

        valor = valor * qtd

        return valor
    }

    function resetForm(i){
        opcaoSelect.forEach( e => {
            e.nome === 'Classic'
            ? e.select = true
            : e.select = false
        })

        pontosCarne.forEach( e => {
            e.abrev === 'AP'
            ? e.select = true
            : e.select = false
        })

        setQtdPedido(1)

        adicionaisSelects.forEach( e => {
            e.qtd = 0
        })

        if(i === 'total'){
            setPedido(prevObj => {
                const newObj = prevObj
                newObj.cliente = ''
                return newObj
            })

            setNomeCLiente(() => {
                return ''
            })

            document.querySelector('#inputNome').value = ''
            
            setLocalEntrega(() => {
                return ''
            })
            
            document.querySelector('#inputLocal').value = ''
            
            setCarrinho(prevObj => {
                const newObj = [...prevObj]
                newObj.splice(0)
                return newObj
            })

            setHoraEntrega( prevObj => {
                const newObj = [...prevObj]
                newObj.forEach( e => {
                    e.valor === '19:30' ? e.select = true : e.select = false
                })
    
                return newObj
            })
        }
    }

    function editarCompra(e){
        let origemClick = e.target
        let idCompra = ''
        if(origemClick.id.substring(0, 6) === 'compra'){
            idCompra = parseInt(origemClick.id.replace('compra',''))
        }else if(origemClick.tagName.toUpperCase() === 'P'){
            idCompra = parseInt(origemClick.parentElement.parentElement.parentElement.id.replace('compra',''))
        }else if(origemClick.tagName.toUpperCase() === 'DIV' && Array.from(origemClick.classList).includes('first')){
            idCompra = parseInt(origemClick.parentElement.parentElement.id.replace('compra',''))
        }else if(origemClick.tagName.toUpperCase() === 'DIV' && !Array.from(origemClick.classList).includes('first')){
            idCompra = parseInt(origemClick.parentElement.id.replace('compra',''))
        }

        var compraRetirada = carrinho.find(e => e.id === idCompra)

        setCarrinho( prevObj => {
            const newObj = []
            prevObj.forEach( e => {
                if(e.id !== idCompra){
                    newObj.push(e)
                }
            })
            return newObj
        })

        setOpcaoSelect( prevObj => {
            const newObj = [...prevObj]
            newObj.forEach( i => {
                i.id === compraRetirada.opcao ? i.select = true : i.select = false
            })
            return newObj            
        })

        setPontosCarne( prevObj => {
            const newObj = [...prevObj]
            newObj.forEach( e => {
                e.abrev === compraRetirada.pontoCarne ? e.select = true : e.select = false
            })
            return newObj
        })
        
        setQtdPedido(parseInt(compraRetirada.qtd.toString().substring(0,1)))

        if(compraRetirada.qtd.toString().length >= 3){
            compraRetirada.adc.push({
                "abrev": "burg",
                "qtd": parseInt(compraRetirada.qtd.toString().split("x")[1]) - 1
            })
        }

        setAdicionaisSelects( prevObj => {
            const newObj = [...prevObj]
            compraRetirada.adc.forEach( e => {
                newObj.find( i => i.abrev === e.abrev).qtd = e.qtd
            })
            return newObj
        })

    }

    async function finalizarPedido(e){
        
        let valorTotalPedido = 0
        carrinho.forEach( i => {
            valorTotalPedido += i.valor
        })
        
        await setPedido( prevObj => {
            const newObj = prevObj
            newObj.horaEntrega = horaEntrega.find( e => e.select).valor
            newObj.carrinho = JSON.stringify([...carrinho])
            newObj.valor = valorTotalPedido

            return newObj
        })

        //setPedido()

        //Validação de dados ----------------------------------------------------------
        const inconsistencias = []
        !pedido.cliente > 0 && inconsistencias.push(padronizarErro('cliente'));
        !ObjDateForString(pedido.data) && inconsistencias.push(padronizarErro('data'));
        !JSON.parse(pedido.carrinho).length > 0 && inconsistencias.push(padronizarErro('carrinho'));
        !['19:30', '20:00', '20:30', '21:00', '21:30'].includes(pedido.horaEntrega) && inconsistencias.push(padronizarErro('horaEntrega'));
        !pedido.valor > 0 && inconsistencias.push(padronizarErro('valor'));

        //Validação de dados ---------------------------------------------------------
        if(inconsistencias.length === 0){
            //Cadastro do pedido--------------------------------------------------------
            setAtualizandoDados(true)

            Axios.post('https://api-casa19-c48b6c3b172e.herokuapp.com/pedidos', pedido)
                .then((response) => {
                    if(response.status === 200){
                        setTimeout(() => {
                            setAtualizandoDados(false)
                            setConfirmacaoPedido(true)
                        }, 1000);                        
                    }
                }).catch((err) => {
                    setTimeout(() => {                        
                        setErroCadPedido( prevObj => {
                            const newObj = prevObj
                            newObj.push({
                                "status": "",
                                "title": err.name,
                                "message": err.message
                            })
                            return newObj
                        })
                        setTimeout(() => {
                            setErroCadPedido([])
                        }, 2000)
                        setAtualizandoDados(false)
                    }, 1000);
                })
            //Cadastro do pedido--------------------------------------------------------
        }else{
            setErroCadPedido( prevObj => {
                const newObj = [...prevObj]
                inconsistencias.forEach( e => newObj.push(e))
                
                return newObj
            })
            setTimeout(() => {
                setErroCadPedido([])
            }, 3000)
        }
    }

    function handleConfirmacaoPedido(click){
        if(click.target.id === 'clickSim'){
            resetForm('total')
            setConfirmacaoPedido(false)
        }else if(click.target.id === 'clickNao'){
            renderPageControl('pedidos')
        }
    }

    function padronizarErro(erro){
        return {
            "status": 400,
            "title": erro,
            "message": `A chave "${erro}" é inválida!`
        }
    }

    return (
        <>
            {confirmacaoPedido && <ConfirmacaoPedido handleConfirmacaoPedido={handleConfirmacaoPedido}/>}
            {erroCadPedido.length > 0 && (<ErrorRender erros={erroCadPedido}/>)}
            {atualizandoDados && (<SpanLoading/>)}
            <div id='pageAdcPedido' className='d-flex w-100'>
                <div className='caixaFormPedido col-8'>
                    <Form className='w-100 p-0 m-0'>
                        <div className='h-12 border border-bottom-0 rounded border-2 border-secondary-subtle d-flex w-100 align-items-center justify-content-between'>
                            <div className='col-6'>
                                <Input
                                    bsSize='sm'
                                    placeholder='Nome'
                                    className='w-90 m-1'
                                    id='inputNome'
                                    onBlur={atualizarPedido}
                                    list='clientesDataList'
                                />
                                <datalist id='clientesDataList'>
                                    {clientes.length > 0 && clientes.map( e => (<option key={e.idclientes} value={e.nome}/>))}
                                </datalist>
                                <Input
                                    bsSize='sm'
                                    placeholder='Local de Entrega'
                                    className='w-90 m-1'
                                    id='inputLocal'
                                    onBlur={atualizarPedido}
                                />
                            </div>
                            <div className='col-5 h-100 d-flex justify-content-between align-items-center me-2'>
                                {horaEntrega.map( (e, index) => (
                                    <div key={`k-${index}`}>
                                        <input type="radio" className="btn-check" name="options" id={`time${e.valor.replace(':', '')}`} onClick={atualizarHoraEntrega}/>
                                        <label className={e.select ? "btn labelHorario btn-primary active" : "btn labelHorario btn-secondary"} htmlFor={`time${e.valor.replace(':', '')}`}>{e.valor}</label>                                    
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='col-8'>
                                <div className='border border-2 border-secondary-subtle rounded'>
                                    <Label className='m-0 w-100 text-center p-0 fs-5'>Opções</Label>
                                    <FormGroup id='boxProdutos' check className='d-flex mx-2 p-0'>
                                        {produtos.map( e => (<CardProduto key={e.idprodutos} produto={e} opcaoSelect={opcaoSelect.find( i => i.id === e.idprodutos)} atualizarOpcaoSelect={atualizarOpcaoSelect}/>))}
                                    </FormGroup>
                                </div>
                                <div className=' rounded border border-top-0 border-2 border-secondary-subtle'>
                                    <Label className='m-0 w-100 text-center p-0 fs-5'>Adicionais</Label>
                                    <FormGroup id='boxAdc' className='d-flex mx-2 p-0'>
                                        {adicionaisSelects.map(e => (<CardAdc key={e.id} adicional={e} handleAdcs={handleAdcs}/>))}
                                    </FormGroup>
                                </div>
                            </div>
                            <div className='col-4 border border-start-0 rounded border-2 border-secondary-subtle'>
                                <div className='d-flex flex-column h-70'>
                                    <div id='boxPontoCarne' className='w-100 col-5 h-70 d-flex justify-content-around align-items-center me-2'>
                                        {pontosCarne.map(e => (<SelectPontoCarne key={e.abrev} pontoCarne={e} atualizarPontoCarne={atualizarPontoCarne}/>))}
                                    </div>
                                    <div className='w-100 col-5 h-30 justify-content-around align-items-center me-2'>
                                        <Label className='m-0 p-0 w-100 text-center'>Quantos lanches?</Label>
                                        <div className='d-flex w-100 align-items-center justify-content-center'>
                                            <AiFillMinusCircle id='minusBtn' onClick={atualizarQtd} className='fs-3'/>
                                            <Input
                                                readOnly
                                                onFocus={ e => e.target.blur()}
                                                value={qtdPedido}
                                                id='inputQtd'
                                                type='number'
                                                className='inputQtd w-18 mx-2 rounded-circle text-center'/>
                                            <AiFillPlusCircle id='plusBtn' onClick={atualizarQtd} className='fs-3'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex h-30 justify-content-center align-items-center'>
                                    <Button onClick={adicionarCarrinho} color='primary' className='w-75 fs-5 h-50 m-0 p-0'>Adicionar lanche <AiOutlineArrowRight/></Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
                <div className='caixaResumoCompra bg-warning-subtle col-4'>
                    <div className='h-16 descricao border border-2 border-seconary-subtle border border-start-0 border-bottom-0 rounded border-2 border-secondary-subtle w-100'>
                        <div className='d-flex align-items-center'>
                            <div className='p-2 justify-content-end col-3 d-flex'>
                                <p className='fw-bold fs-10 m-0 p-0'>Nome</p>
                            </div>
                            <div className='p-2 col-9 d-flex justify-content-start'>
                                <p className='m-0 p-0'>{nomeCliente}</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className='d-flex p-2 col-3 justify-content-end'>
                                <p className='fw-bold m-0 p-0 fs-10'>Local de entrega</p>
                            </div>
                            <div className='d-flex p-2 col-9 justify-content-start'>
                                <p className='m-0 p-0'>{localEntrega}</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-64 carrinho border-2 border-top border-secondary-subtle rounded'>
                        {carrinho.map( (e, i) => <CardNewPedido editarCompra={editarCompra} compra={e} index={i} key={i} produtos={produtos} pontosCarne={pontosCarne}/>)}
                    </div>
                    <div className='h-20 d-flex align-items-center border-bottom rounded border-2 border-secondary-subtle justify-content-center me-2'>
                        <Button onClick={finalizarPedido} className='w-75 h-75 fs-2' color='primary'>Finalizar Pedido</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageAdcPedido
