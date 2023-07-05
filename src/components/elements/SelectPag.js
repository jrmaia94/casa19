import React, { useState } from 'react'

export default function SelectPag({ pedido, index }) {
    const [valor, setValor] = useState(pedido.pagamento)

    function changeInput(e){
        setValor(e.target.value)
    }
    
    return (
        <select onChange={changeInput} tabIndex={-1} className='border-0' value={valor}>
            <option className='border-0' value='Não pago'>Não pago</option>
            <option className='border-0' value='Pago parcialmente'>Pago parcialmente</option>
            <option className='border-0' value='Pago'>Pago</option>
        </select>
    )
}
