import React from 'react'
import * as C from './style'

function NavItem({ title, onClick }) {
    return (
        <C.Item onClick={() => onClick(title)}>{title}</C.Item>
    )
}

export default NavItem
