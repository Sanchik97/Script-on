import React from 'react'
import {
	Row,
	Col,
	Form,
	Input,
	InputGroup,
	Button,
	Container
} from 'reactstrap'
import { connect } from 'react-redux'
import { loginHandler } from '../../redux/actions/script'

class Login extends React.Component {
	state = {
		username: '',
		password: '',
		error: ''
	}

	inputChangeHandler = event => {
		event.persist()

		const { name, value } = event.target

		this.setState({
			[name]: value
		})
	}

	handleLoginSubmit = () => {
		const { username, password } = this.props.login
		if (username === this.state.username && password === this.state.password) {
			return this.props.loginHandler()
		} else {
			this.setState({
				error: 'Ошибка! Логин или пароль неверны'
			})
		}
	}

	render() {
		const { username, password } = this.state
		return (
			<Container>
				<Row>
					<Col md="3" className="m-auto d-flex">
						<Form className="text-center align-self-center">
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
									name="username"
									placeholder="Введите логин"
									className="mb-2"
									defaultValue={username.value}
									onChange={this.inputChangeHandler}
								/>
							</InputGroup>
							<InputGroup>
								<Input
									type="password"
									name="password"
									placeholder="Введите пароль"
									defaultValue={password.value}
									onChange={this.inputChangeHandler}
								/>
							</InputGroup>
							<p className="text-danger mt-2">{this.state.error}</p>
							<Button
								onClick={this.handleLoginSubmit}
								className="mt-4 btn btn-lg btn-primary btn-block"
								color="primary"
							>
								Войти
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
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
)(Login)
