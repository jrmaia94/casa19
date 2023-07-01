import React from 'react';
import {Spinner} from 'reactstrap';

function SpanLoading() {
  return (
    <>
        <div id='pageCarregamento' className='z-2 opacity-5 d-flex align-items-center justify-content-center bg-secondary-subtle  position-absolute top-0 start-0 end-0 bottom-0'>
        </div>
        <div id='pageCarregamento' className='z-3 d-flex align-items-center justify-content-center position-absolute top-0 start-0 end-0 bottom-0'>
            <div className='rounded w-30 h-12 text-center'>
                <Spinner
                    className="m-5"
                    color="primary"
                    >
                    Loading...
                </Spinner>
            </div>
        </div>
    </>
  )
}

export default SpanLoading