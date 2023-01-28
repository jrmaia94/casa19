import React from 'react';
import * as C from './style'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import UseFormPedido from '../UseFormPedido';
import SelectOptionPedido from '../SelectOptionPedido';
import SelectAdcPedido from '../SelectAdcsPedido';

function FormNovoPedido({ produtos, adicionais }) {
    return (
        <C.FormBox>
            
            <SelectAdcPedido adicionais={adicionais}/>


            <C.BoxBtn>
                <C.BtnNextPrev type='Submit' direction='next'>
                    <GrFormPrevious/>
                </C.BtnNextPrev>
                <C.BtnNextPrev type='button' direction='prev'>
                    <GrFormNext/>
                </C.BtnNextPrev>
            </C.BoxBtn>
        </C.FormBox>
    )
}

export default FormNovoPedido