import React from 'react';
import { CiWarning } from 'react-icons/ci';

function ErrorRender({erros}) {
    return <>
        <div>
            <div id='' className='z-2 opacity-5 d-flex align-items-center justify-content-center bg-secondary-subtle  position-absolute top-0 start-0 end-0 bottom-0'>
            </div>
            <div className='z-3 d-flex flex-column align-items-center justify-content-center position-absolute top-0 start-0 end-0 bottom-0'>
                <div className='w-50 h-75 rounded-5 bg-danger d-flex flex-column align-items-center justify-content-center'>
                    <CiWarning className='text-white fs-1'/>
                    {erros.map( (e,i) => {
                        return (
                            <div key={i} className='d-flex text-white justify-content-center align-items-center flex-column text-center'>
                                <h4>{e.status}</h4>
                                <h4>{e.title}</h4>
                                <p>{e.message}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
}

export default ErrorRender
