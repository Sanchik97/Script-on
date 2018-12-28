import React from 'react'
import { Input } from 'reactstrap'
import './AnswerInput.scss'
import QuestionInput from '../QuestionInput/QuestionInput'
import { useUID } from 'react-uid'


export class AnswerInput extends React.Component {
	state = {
		expand: true,
		answerValue: '',
		answerId: useUID()
	}
	

	answerValueHandler = event => {
		this.setState({
			answerValue: event.target.value
		})
	}

	expandToggle = () => {
		this.setState({
			expand: !this.state.expand
		})
	}

	render() {
		console.log(this.state.answerId)
		return (
			<div
				className="answerinput__block mt-2 mb-2"
				style={
					this.state.expand ? { height: `40px`, overflow: `hidden` } : null
				}
			>
				{this.state.expand ? (
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
						data-id={this.state.answerId}
						className="answerinput"
						placeholder="Ответ клиента"
						defaultValue={this.state.answerValue}
						onChange={this.answerValueHandler}
					/>
					<i
						className="far fa-trash-alt link ml-2 mr-2 text-secondary"
						onClick={this.props.removeAnswerHandler}
					/>
					<i className="far link ml-2 mr-2 fa-copy text-secondary" />
				</div>
				<QuestionInput />
			</div>
		)
	}
}
