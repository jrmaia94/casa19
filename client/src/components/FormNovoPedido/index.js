import React from 'react';
import * as C from './style'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import UseFormPedido from '../UseFormPedido';
import SelectOptionPedido from '../SelectOptionPedido';
import SelectAdcPedido from '../SelectAdcsPedido';

// Hooks
import useForm from '../../hooks/useForm';

function FormNovoPedido({ produtos, adicionais }) {

    const formComponents = [ <UseFormPedido />, <SelectOptionPedido produtos={produtos} />, <SelectAdcPedido adicionais={adicionais} />]

    const {currentStep, currentComponent, changeStep} = useForm(formComponents)

    return (
        <C.FormBox>

            {currentComponent}

            <C.BoxBtn>
                <C.BtnNextPrev currentStep={currentStep} onClick={() => changeStep( currentStep - 1)} type='button' direction='prev'>
                    <GrFormPrevious/>
                </C.BtnNextPrev>
                <C.BtnNextPrev lastStep={formComponents.length - 1} currentStep={currentStep} onClick={(e) => changeStep(currentStep + 1, e)} type='button' direction='next'>
                    <GrFormNext/>
                </C.BtnNextPrev>
            </C.BoxBtn>
        </C.FormBox>
    )
}

export default FormNovoPedido