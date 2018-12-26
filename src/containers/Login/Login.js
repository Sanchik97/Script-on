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
	timeoutFunction = () => {
		setTimeout(() => {
			this.props.loginHandler()
		}, 100000)
	}

	componentWillUnmount = () => {
		this.timeoutFunction()
	}
	componentDidUpdate() {
		this.timeoutFunction()
	}

	handleLoginSubmit = event => {}

	render() {
		return (
			<Container>
				<Row>
					<Col md="3" className="m-auto d-flex">
						<Form
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
									name="login"
									defaultValue=""
								/>
							</InputGroup>
							<InputGroup>
								<Input
									type="password"
									placeholder="Введите пароль"
									name="password"
									defaultValue=""
								/>
							</InputGroup>
							<p className="text-danger mt-2" id="error" />
							<Button
								onClick={() => this.props.loginHandler()}
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
