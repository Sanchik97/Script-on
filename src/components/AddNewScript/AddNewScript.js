import React from 'react'
import { Container, Form, Input, Button } from 'reactstrap'
import QuestionInput from '../QuestionInput/QuestionInput'
import './addNewScript.scss'
import { randomId } from '../../selectors'

class AddNewScript extends React.Component {
	state = {
		id: randomId(),
		nameOfScript: '',
		questions: [],
		answers: []
	}

	questionsArray = (questionId, nameOfQuestion, answerId, nameOfAnswers) => {
		this.setState({
			questions: [{ questionId, nameOfQuestion, answerId, nameOfAnswers }]
		})
		console.log(this.state.questions)
	}

	nameOfScriptHandler = event => {
		this.setState = {
			nameOfScript: event.target.value
		}
	}

	AddNewScriptHandler = event => {
		event.preventDefault()
	}

	render() {
		const { nameOfScript } = this.state
		return (
			<Container>
				<h1 className="h3">Добавить новый скрипт</h1>
				<Form className="AddNewScript__form">
					<Input
						className=" m	t-3 mb-3"
						placeholder="Введите название скрипта"
						defaultValue={nameOfScript}
						onChange={(this.nameOfScriptHandler, this.questionsArray)}
					/>

					<hr />

					<div className="AddNewScript__wrapper">
						<div className="mt-2 mb-4">
							<QuestionInput
								answersArray={this.answersArray}
								questionsArray={this.questionsArray}
							/>
						</div>
					</div>
					<Button color="success" onClick={this.AddNewScriptHandler}>
						Добавить
					</Button>
				</Form>
			</Container>
		)
	}
}

export default AddNewScript
