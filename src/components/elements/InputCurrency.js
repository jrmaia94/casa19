import React, { useEffect, useState } from 'react';
import '../../styles/pagePagamentos.css';
import { NumberMoneyForStr } from '../../config/configMoney';

export default function InputCurrency({tabindex, valorPedido}) {
    const [valorAnterior, setValorAnterior] = useState()

    const [valor, setValor] = useState(0)
    const [valorPlace, setValorPlace] = useState(0)

    useEffect(() => {
        setValorPlace(valorPedido * 100)
    }, [valorPedido])

    useEffect(() => {
        setValor(NumberMoneyForStr(valorPlace/100))
    }, [valorPlace])

    function focusInput(e){
        setValorAnterior(valorPlace)
        setValorPlace(0)
        e.target.setSelectionRange(e.target.selectionStart, e.target.selectionStart)
    }

    function blurInput(e){
        if(valorPlace === 0){
            setValorPlace(valorAnterior)
        }
    }

    function downKey(e){
        if((e.keyCode >= 48 && e.keyCode <= 57)||(e.keyCode >= 96 && e.keyCode <= 105)){
            setValorPlace(prevObj => {
                let newObj = prevObj
                newObj = parseFloat(prevObj.toString() + e.key.toString())
                return newObj
            })
        }else if(e.key === 'Delete' || e.key === 'Backspace'){
            setValorPlace(() => {
                return (valorPlace - (valorPlace % 10))/10
            })
        }else if(e.key === 'Tab'){
        }else if(e.key === 'ArrowDown'){
            e.target.blur()
        }else{
            e.preventDefault()
        }
    }

    return (
        <input tabIndex={tabindex + 1} onChange={() => {}} placeholder={valorPlace} type='' value={valor} onBlur={blurInput} onFocus={focusInput} onKeyDown={downKey} className='inputNumber border-0'/>
    )
}