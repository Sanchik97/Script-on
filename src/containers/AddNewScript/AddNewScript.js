import React from 'react'
import { connect } from 'react-redux'
import { getScripts } from '../../selectors/'
import { fetchScripts, newScriptName } from '../../redux/actions/script'
import { Container, Form, Input, Button } from 'reactstrap'
import QuestionInput from '../../ui/QuestionInput/QuestionInput'
import './addNewScript.scss'

class AddNewScript extends React.Component {
	componentDidMount() {
		this.props.fetchScripts()
	}

	AddNewScriptHandler = event => {
		event.preventDefault()
		const { scripts, addNewScript } = this.props

		scripts.push({
			id: String(Number(scripts.length + 1)),
			nameOfScript: addNewScript.newScriptName,
			questions: [],
			answers: []
		})
	}

	render() {
		return (
			<Container>
				<h1 className="h3">Добавить новый скрипт</h1>
				<Form className="AddNewScript__form">
					<Input
						className=" mt-3 mb-3"
						placeholder="Введите название скрипта"
						defaultValue=""
						onChange={event => this.props.newScriptName(event.target.value)}
					/>

					<hr />

					<div className="AddNewScript__wrapper">
						<div className="mt-2 mb-4">
							<QuestionInput />
						</div>
					</div>
					<Button color="primary">Добавить</Button>
				</Form>
			</Container>
		)
	}
}
function mapStateToProps(state) {
	return {
		scripts: getScripts(state),
		addNewScript: state.addNewScript
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchScripts: () => dispatch(fetchScripts()),
		newScriptName: event => dispatch(newScriptName(event))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddNewScript)
