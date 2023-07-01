import React from 'react'

function SelectPontoCarne({pontoCarne, atualizarPontoCarne}) {
    return (
        <div className='w-30'>
            <input type="radio" className="btn-check" name="options"/>
            <label
                id={pontoCarne.abrev}
                onClick={atualizarPontoCarne}
                className={
                    pontoCarne.select
                    ? 'labelPonto w-100 h-25 lh-1 btn btn-primary active'
                    : 'labelPonto w-100 h-25 lh-1 btn btn-secondary'
                }
                htmlFor={pontoCarne.abrev}
            >
                {pontoCarne.ponto}
            </label>
        </div>
    )
}

export default SelectPontoCarne
