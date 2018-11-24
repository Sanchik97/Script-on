import React from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Container
} from 'reactstrap'
import { Link } from 'react-router-dom'

export default class Navigate extends React.Component {
	state = {
		isOpen: false
	}
	render() {
		return (
			<Navbar className="mb-5" color="light" light expand="md">
				<Container>
					<NavbarBrand className="mr-5">reactstrap</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink tag={Link} to="/">
									<i className="fas fa-desktop mr-2" />
									Скрипты
								</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Опции
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>Option 1</DropdownItem>
									<DropdownItem>Option 2</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>Reset</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>

						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink tag={Link} to="/components/">
									<i className="mr-2 fas fa-user-cog" />
									Панель администратора
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		)
	}
}
