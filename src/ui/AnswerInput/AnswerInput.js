import React from 'react'
import { Input } from 'reactstrap'
import './AnswerInput.scss'
import QuestionInput from '../QuestionInput/QuestionInput'

export class AnswerInput extends React.Component {
	state = {
		expand: true,
		addQuestionInput: false
	}

	addQuestionInputHandler = () => {
		this.setState({
			addQuestionInput: true
		})
	}

	expandToggle = () => {
		this.setState({
			expand: !this.state.expand
		})
	}

	render() {
		return (
			<div
				className="answerinput__block mt-2 mb-2"
				style={
					this.state.expand ? { height: `40px`, overflow: `hidden` } : null
				}
			>
				{this.state.expand ? (
					<i
						className="fas fa-angle-up answerinput__arrow"
						onClick={this.expandToggle}
					/>
				) : (
					<i
						className="fas fa-angle-down answerinput__arrow"
						onClick={this.expandToggle}
					/>
				)}

				<i className="fa fa-user-tie answerinput__icon" />
				<div className="d-flex align-items-center">
					<Input
						data-id={this.props.index}
						className="answerinput"
						placeholder="Ответ клиента"
						defaultValue=""
					/>
					<i
						className="far fa-trash-alt link ml-2 mr-2 text-secondary"
						onClick={index => {
							this.props.removeAnswerHandler(index)
						}}
					/>
					<i className="far link ml-2 mr-2 fa-copy text-secondary" />
				</div>
				{this.state.addQuestionInput ? <QuestionInput /> : null}

				<div className="mt-3 mb-3 ml-5">
					<p className="text-secondary">
						{this.state.addQuestionInput ? null : (
							<i
								className="fas fa-plus link "
								onClick={() => this.addQuestionInputHandler()}
							/>
						)}
					</p>
				</div>
			</div>
		)
	}
}
