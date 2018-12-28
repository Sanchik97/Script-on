import React from 'react'
import { AnswerInput } from '../AnswerInput/AnswerInput'
import './QuestionInput.scss'
import Editor from '../../containers/Editor/Editor'

class QuestionInput extends React.Component {
	state = {
		expand: false,
		answers: [],
		nameOfAnswer: `Реплика оператора`,
		editor: false,
		questionId:
			Math.random()
				.toString(36)
				.substring(2, 15) +
			Math.random()
				.toString(36)
				.substring(2, 15)
	}

	editorToggle = () => {
		this.setState({
			editor: !this.state.editor
		})
	}

	nameOfAnswerHandler = html => {
		this.setState({
			nameOfAnswer: html
		})
	}

	expandToggle = () => {
		this.setState({
			expand: !this.state.expand
		})
	}

	removeAnswerHandler = index => {
		this.setState(prevState => {
			return { answers: prevState.answers.filter((el, i) => i !== index) }
		})
	}

	addAnswerInputHandler = () => {
		this.setState({
			answers: [...this.state.answers, <AnswerInput />]
		})
	}

	render() {
		return (
			<React.Fragment>
				<div
					data-id={this.state.questionId}
					className="questioninput__block mt-2 mb-2"
					style={
						this.state.expand ? { height: `40px`, overflow: `hidden` } : null
					}
				>
					{this.state.expand ? (
						<i
							className="fas fa-angle-down questioninput__arrow"
							onClick={this.expandToggle}
						/>
					) : (
						<i
							className="fas fa-angle-up questioninput__arrow"
							onClick={this.expandToggle}
						/>
					)}

					<i className="fa fa-headset questioninput__icon" />

					<div
						data-id={{}}
						className="questioninput form-control"
						onClick={() => this.editorToggle()}
						dangerouslySetInnerHTML={{ __html: this.state.nameOfAnswer }}
					/>

					{this.state.answers.map((item, index) => {
						return (
							<AnswerInput
								key={index}
								removeAnswerHandler={() => this.removeAnswerHandler(index)}
							/>
						)
					})}

					<div className="mt-3 mb-3 ml-2">
						<p className="link text-secondary">
							<i
								className="fas fa-plus"
								onClick={() => {
									this.addAnswerInputHandler()
								}}
							/>
						</p>
					</div>
				</div>

				<Editor
					editor={this.state.editor}
					nameOfAnswer={this.state.nameOfAnswer}
					nameOfAnswerHandler={this.nameOfAnswerHandler}
					toggle={this.editorToggle}
				/>
			</React.Fragment>
		)
	}
}

export default QuestionInput
