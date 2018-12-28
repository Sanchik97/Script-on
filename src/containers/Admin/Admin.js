import React from 'react'
import { Container, Button } from 'reactstrap'
import Scripts from '../Scripts/Scripts'
import { Link } from 'react-router-dom'

class Admin extends React.Component {
	render() {
		return (
			<Container>
				<Scripts />
				<div className="mt-5 mb-5 ml-5">
					<Button className="btn-success" tag={Link} to="/admin/addnewscript">
						Добавить новый скрипт
					</Button>
				</div>
			</Container>
		)
	}
}

export default Admin
