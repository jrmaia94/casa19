import React, { useState } from 'react';
import { ObjDateForString } from '../../config/dataParse';
import { 
    Card,
    CardTitle,
    Input,
    Button
} from 'reactstrap';

function ConfirmacaoData({ confirmData }) {

    const [dataHoje, setDataHoje] = useState(ObjDateForString(new Date(Date.now())))

    function mudarData(e){
        setDataHoje(e.target.value)
    }

    function confirmar(){
        confirmData(dataHoje)
    }

    return (
        <Card className='bg-info-subtle position-absolute z-3 top-0 start-0 bottom-0 end-0 m-auto w-50 h-50 d-flex justify-content-evenly align-items-center'>
            <CardTitle className='w-75 m-0 p-0 text-center' tag='h5'>Confirmar data de hoje para operações?</CardTitle>
            <Input className='w-25 fs-5' type='date' value={dataHoje} onChange={mudarData}/>
            <div className='d-flex w-75 justify-content-center'>
                <Button className='w-25' color='primary' onClick={confirmar}>Ok</Button>
            </div>
        </Card>
    )
}
  
export default ConfirmacaoData