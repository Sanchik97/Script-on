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
import AddNewScript from '../AddNewScript/AddNewScript'

class Admin extends React.Component {
	state = {
		modal: false
	}

	modalToggle = () => {
		this.setState({
			modal: false
		})
	}

	componentWillUnmount() {
		setTimeout(() => {
			this.props.loginHandler()
		}, 72000)
	}

	loginHandler(event) {
		event.preventDefault()
		let usernameValue = document.getElementById('username').value
		let passwordValue = document.getElementById('password').value
		let error = document.getElementById('error')

		const { username, password } = this.props.login

		if (usernameValue === username && passwordValue === password) {
			this.props.loginHandler()
		} else {
			error.innerHTML = 'Ошибка! Логин или пароль неверные'
		}
	}

	renderLogin() {
		console.log(this.props.login)
		return (
			<React.Fragment>
				<Row>
					<Col md="3" className="m-auto d-flex">
						<Form
							onSubmit={event => this.loginHandler(event)}
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
									id="username"
								/>
							</InputGroup>
							<InputGroup>
								<Input
									type="password"
									placeholder="Введите пароль"
									id="password"
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
				<Button onClick={() => this.setState({ modal: true })}>
					Добавить новый скрипт
				</Button>
				<AddNewScript modalToggle={this.modalToggle} modal={this.state.modal} />
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
