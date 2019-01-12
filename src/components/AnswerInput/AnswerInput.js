import React from 'react'
import { Input } from 'reactstrap'
import './AnswerInput.scss'
import QuestionInput from '../QuestionInput/QuestionInput'
import { randomId } from '../../selectors'

class AnswerInput extends React.Component {
	state = {
		expand: true,
		nameOfAnswer: 'Ответ клиента',
		answerId: randomId(),
		questionId: this.props.questionId
	}

	nameOfAnswerHandler = event => {
		this.setState({
			nameOfAnswer: event.target.value
		})
	}

	expandToggle = () => {
		this.setState({
			expand: !this.state.expand
		})
	}

	render() {
		const { expand, nameOfAnswer, answerId, questionId } = this.state
		return (
			<div
				className="answerinput__block mt-2 mb-2"
				style={expand ? { height: `40px`, overflow: `hidden` } : null}
			>
				{expand ? (
					<i
						className="fas fa-angle-down answerinput__arrow"
						onClick={this.expandToggle}
					/>
				) : (
					<i
						className="fas fa-angle-up answerinput__arrow"
						onClick={this.expandToggle}
					/>
				)}

				<i className="fa fa-user-tie answerinput__icon" />
				<div className="d-flex align-items-center">
					<Input
						className="answerinput"
						placeholder="Ответ клиента"
						defaultValue={this.state.nameOfAnswer}
						onChange={this.nameOfAnswerHandler}
					/>
					<i
						className="far fa-trash-alt link ml-2 mr-2 text-secondary"
						onClick={this.props.removeAnswerHandler}
					/>
					<i className="far link ml-2 mr-2 fa-copy text-secondary" />
				</div>
				<QuestionInput
					answerId={answerId}
					nameOfAnswer={nameOfAnswer}
					anwers={(answerId, nameOfAnswer, questionId)}
				/>
			</div>
		)
	}
}

export default AnswerInput
