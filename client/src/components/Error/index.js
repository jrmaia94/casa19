import React from 'react';
import * as C from './style';
import { FaExclamationCircle } from 'react-icons/fa';

function Error() {
    return (
        <C.Container>
            <C.TitleError>
                Ocorreu um erro
            </C.TitleError>
            <C.Span>
                <FaExclamationCircle />
            </C.Span>
            <C.TextError>Contate um administrador</C.TextError>
        </C.Container>
    )
}

export default Error
