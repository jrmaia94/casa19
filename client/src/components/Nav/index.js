import React from 'react';
import NavItem from '../NavItem';
import * as C from './style'

function Nav({ onClick }) {

    return (
        <C.Container>
            <NavItem onClick={onClick} title='Pedidos'/>
            <NavItem onClick={onClick} title='Produtos'/>
            <NavItem onClick={onClick} title='Pagamentos'/>
            <NavItem onClick={onClick} title='Controle Interno'/>
        </C.Container>
    )
}

export default Nav
