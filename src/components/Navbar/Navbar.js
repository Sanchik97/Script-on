import React from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container
} from 'reactstrap'
import { Link } from 'react-router-dom'

class Navigate extends React.Component {
	state = {
		isOpen: false
	}
	render() {
		const { isOpen } = this.state
		return (
			<Navbar className="mb-4" color="light" light expand="md">
				<Container>
					<NavbarBrand className="mr-5">reactstrap</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink tag={Link} to="/">
									<i className="fas fa-desktop mr-2" />
									Скрипты
								</NavLink>
							</NavItem>
						</Nav>

						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink tag={Link} to="/admin">
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

export default Navigate
