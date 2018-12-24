import React from 'react'
import {
	Container,
	Col,
	Row,
	InputGroup,
	Form,
	Input,
	Button
} from 'reactstrap'
import { connect } from 'react-redux'
import { loginHandler } from '../../redux/actions/script'
import Scripts from '../Scripts/Scripts'
import { Link } from 'react-router-dom'

class Admin extends React.Component {
	timeoutFunction = () => {
		setTimeout(() => {
			this.props.loginHandler()
		}, 100000)
	}

	componentWillUnmount = () => {
		this.timeoutFunction()
	}

	handleLoginSubmit = event => {
		event.preventDefault()
		const { username, password } = this.props.login
	}

	renderLogin() {
		const { username, password } = this.props.login
		return (
			<React.Fragment>
				<Row>
					<Col md="3" className="m-auto d-flex">
						<Form
							onSubmit={event => this.handleLoginSubmit(event)}
							className="text-center align-self-center"
						>
							<img
								src="http://bootstrap-4.ru/assets/brand/bootstrap-solid.svg"
								alt="Logo"
								width="72"
								className="mb-4 mt-5"
							/>
							<h1 className="h3 mb-3 font-weight-normal">
								Пожалуйста, авторизуйтесь!
							</h1>
							<InputGroup>
								<Input
									type="text"
									placeholder="Введите логин"
									className="mb-2"
									defaultValue={username}
								/>
							</InputGroup>
							<InputGroup>
								<Input
									type="password"
									placeholder="Введите пароль"
									defaultValue={password}
								/>
							</InputGroup>
							<p className="text-danger mt-2" id="error" />
							<Button
								className="mt-4 btn btn-lg btn-primary btn-block"
								color="primary"
							>
								Войти
							</Button>
						</Form>
					</Col>
				</Row>
			</React.Fragment>
		)
	}

	renderAdmin() {
		return (
			<React.Fragment>
				<Scripts />
				<div className="mt-5 mb-5 ml-5">
					<Button className="btn-success" tag={Link} to="/admin/addnewscript">
						Добавить новый скрипт
					</Button>
				</div>
			</React.Fragment>
		)
	}

	render() {
		const { login } = this.props.login
		return (
			<Container>{login ? this.renderAdmin() : this.renderLogin()}</Container>
		)
	}
}

function mapStateToProps(state) {
	return {
		login: state.login
	}
}
function mapDispatchToProps(dispatch) {
	return {
		loginHandler: () => dispatch(loginHandler())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Admin)
