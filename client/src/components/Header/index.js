import React from 'react';
import Nav from '../Nav';
import * as C from './style'

function Header({ onClick }) {
    return (
        <C.Container>
            <C.Logo>
                <img alt='logo' src='./logo.png'/>
                <C.BoxBlock>
                    <C.Title>Casa 19</C.Title>
                    <C.parag>HAMBURGUERIA</C.parag>
                </C.BoxBlock>
            </C.Logo>
            <Nav onClick={onClick} />
        </C.Container>
    )
}

export default Header