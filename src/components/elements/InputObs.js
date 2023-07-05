import React, { useState } from 'react'

export default function InputObs({ pedido, index }) {
    const [valor, setValor] = useState(pedido.obs);
    
    function changeInput(e){
        setValor(e.target.value)
    }

    return (
        <input onChange={changeInput} tabIndex={-1} className='border-0' value={valor} type='text'/>
    )
}
