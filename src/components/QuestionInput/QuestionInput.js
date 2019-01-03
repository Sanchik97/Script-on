import React from 'react'
import { AnswerInput } from '../AnswerInput/AnswerInput'
import './QuestionInput.scss'
import Editor from '../Editor/Editor'
import { randomId } from '../../selectors/'
import { connect } from 'react-redux'
import { questionHandler } from '../../redux/actions/script'

class QuestionInput extends React.Component {
	state = {
		expand: false,
		answers: [],
		answerId: this.props.answerId,
		nameOfAnswer: this.props.nameOfAnswer,
		nameOfQuestion: `Реплика оператора`,
		editor: false,
		questionId: randomId()
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			nameOfAnswer: nextProps.nameOfAnswer
		})
	}

	editorToggle = () => {
		this.setState({
			editor: !this.state.editor
		})
	}

	nameOfQuestionHandler = html => {
		this.setState({
			nameOfQuestion: html
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

	componentDidMount() {
		this.props.questionHandler(
			this.state.questionId,
			this.state.nameOfQuestion,
			this.state.answerId,
			this.state.nameOfAnswer
		)
	}

	render() {
		const {
			questionId,
			nameOfQuestion,
			answerId,
			nameOfAnswer,
			expand,
			editor
		} = this.state
		return (
			<React.Fragment>
				<div
					className="questioninput__block mt-2 mb-2"
					style={expand ? { height: `40px`, overflow: `hidden` } : null}
				>
					{expand ? (
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
						data-id={questionId}
						data-answer-name={nameOfAnswer}
						data-answer-id={answerId}
						defaultValue={nameOfQuestion}
						className="questioninput form-control"
						onClick={() => this.editorToggle()}
						dangerouslySetInnerHTML={{ __html: this.state.nameOfQuestion }}
					/>
					{this.state.answers.map((item, index) => {
						return (
							<AnswerInput
								key={index}
								questionId={questionId}
								removeAnswerHandler={() => this.removeAnswerHandler(index)}
							/>
						)
					})}

					<div className="mt-3 mb-3 ml-2">
						<p className="link text-secondary">
							<i className="fas fa-plus" onClick={this.addAnswerInputHandler} />
						</p>
					</div>
				</div>

				<Editor
					editor={editor}
					nameOfQuestion={nameOfQuestion}
					nameOfQuestionHandler={this.nameOfQuestionHandler}
					toggle={this.editorToggle}
				/>
			</React.Fragment>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		questionHandler: (questionId, nameOfQuestion, answerId, nameOfAnswer) =>
			dispatch(
				questionHandler(questionId, nameOfQuestion, answerId, nameOfAnswer)
			)
	}
}

export default connect(
	null,
	mapDispatchToProps
)(QuestionInput)
