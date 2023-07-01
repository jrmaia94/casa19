import React, { useState, useEffect } from 'react';
import {
	Navbar,
	NavbarBrand,
	Media,
	Input,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';
import { ObjDateForString } from '../../config/dataParse';


function Navigation({ onclick, data, setData }) {

	const [isOpen, setIsOpen] = useState(false);    
    const toggle = () => setIsOpen(!isOpen);
	const [dataD, setDataD] = useState(ObjDateForString(new Date(Date.now())))

	useEffect(() => {
		setDataD(data)
	}, [data])

	function alterarData(e){
		setDataD(e.target.value)
	}
	
	function dataBlur(e){
		setData(e.target.value)
	}

	function digitandoData(e){
		e.keyCode === 13 && e.target.blur()
	}

	return (
		<Navbar color='warning' expand="md">
			<NavbarBrand>
				<Media>
					<Media left>
						<Media
							object
							src={process.env.PUBLIC_URL + '/logo.png'}
							alt="logo"
							className="img-fluid"
							style={{maxWidth: '60px'}}
						/>
					</Media>
				</Media>
			</NavbarBrand>
			<NavbarBrand>
				<Input
					id="dataTrabalho"
					name="date"
					type="date"
					className=''
					value={dataD}
					onChange={alterarData}
					onBlur={dataBlur}
					onKeyDown={digitandoData}
				/>
			</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="mr-auto" navbar>
					<NavItem>
						<NavLink className='rounded' id='pedidos' onClick={onclick} href='#'>Quadro de pedidos</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='rounded' id='entregas' onClick={onclick} href='#'>Controle de entregas</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className='rounded' id='pagamentos' onClick={onclick} href='#'>Controle de pagamentos</NavLink>
					</NavItem>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle className='rounded' nav caret>
							Relatórios
						</DropdownToggle>
						<DropdownMenu end>
							<DropdownItem id='relDeb' onClick={onclick}>
								Relação de débitos
							</DropdownItem>
							<DropdownItem divider />
							<DropdownItem id='relGeral' onClick={onclick}>
								Relatório geral
							</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
				</Nav>
			</Collapse>
		</Navbar>
	)
}
	
export default Navigation