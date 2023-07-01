import React from 'react';
import { GiConfirmed } from 'react-icons/gi';
import {Button} from 'reactstrap';

function ConfirmacaoPedido({handleConfirmacaoPedido}) {
    return <>
        <div>
            <div id='' className='z-2 opacity-5 d-flex align-items-center justify-content-center bg-secondary-subtle  position-absolute top-0 start-0 end-0 bottom-0'>
            </div>
            <div className='z-3 d-flex flex-column align-items-center justify-content-center position-absolute top-0 start-0 end-0 bottom-0'>
                <div className='text-black w-35 h-50 rounded-5 bg-warning bg-gradient d-flex flex-column align-items-center justify-content-center'>
                    <div className='h-50 mt-3 d-flex justify-content-center align-items-center'>
                        <h4 className='m-0 p-0'>Pedido Registrado<GiConfirmed className='ms-3 fs-1'/></h4>
                    </div>
                    <p className='m-0 p-0 mb-2'>Cadastrar novo pedido?</p>
                    <div className='d-flex w-100 justify-content-center align-items-center'>
                        <Button id='clickNao' onClick={handleConfirmacaoPedido} className='w-25 m-2 me-4' color='danger'>Não</Button>
                        <Button id='clickSim' onClick={handleConfirmacaoPedido} className='w-25 m-2 ms-4' color='primary'>Sim</Button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ConfirmacaoPedido
