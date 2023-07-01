import React from 'react';
import {
    Button
} from 'reactstrap';


function Alert({ tipoAlerta, dados }) {
    return (
        <>
            {tipoAlerta === 'confirmacao' && (
                <div>
                    <div id='' className='z-2 opacity-5 d-flex align-items-center justify-content-center bg-secondary-subtle  position-absolute top-0 start-0 end-0 bottom-0'>
                    </div>
                    <div className='z-3 d-flex flex-column align-items-center justify-content-center position-absolute top-0 start-0 end-0 bottom-0'>
                        <div className='bg-warning text-black w-50 h-50 rounded-5 bg-gradient d-flex flex-column align-items-center justify-content-around'>
                            <div className='h-30 w-100 d-flex justify-content-center align-items-center'>
                                <h4 className='m-0 p-0'>{dados.titulo}</h4>
                            </div>
                            <p className='text-center h-25 m-2 p-0 mb-2 w-90'>{dados.texto}</p>
                            <div className='d-flex w-100 justify-content-end align-items-center'>
                                {dados.buttons.map( (b,i) => (
                                    <Button  onClick={b.function} id={b.id}  key={i} className='m-2 w-20' color={b.type}>{b.titulo}</Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Alert
