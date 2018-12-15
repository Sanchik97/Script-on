import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { getScriptById } from '../../selectors/'
import {
	fetchScriptById,
	questionId,
	answerId
} from '../../redux/actions/script'
import { Link } from 'react-router-dom'
import MapBar from '../MapBar/MapBar'

class ViewScript extends React.Component {
	componentDidMount() {
		this.props.fetchScriptById(this.props.match.params.id)
	}

	renderQuestions() {
		const { script, answer } = this.props
		const renderQuestions = script.questions.map((item, index) => {
			return (
				<React.Fragment key={index}>
					{item.answerId === answer.answerId ? (
						<React.Fragment>
							<h2 className="h4">
								{item.answerId > 0 ? (
									<i class="fas fa-user-alt mr-3 mb-3" />
								) : (
									<i className="fas fa-headset mr-3 mb-3" />
								)}

								{item.nameOfQuestion}
							</h2>
							<p>{item.tips}</p>
							<ul>{this.renderAnswers()}</ul>
						</React.Fragment>
					) : null}
				</React.Fragment>
			)
		})

		return <div>{renderQuestions}</div>
	}

	renderAnswers() {
		const { script, quest } = this.props
		const renderAnswers = script.answers.map((item, index) => {
			return (
				<React.Fragment key={index}>
					{item.questionId === quest.questionId ? (
						<li key={index} className="mt-1 mb-1">
							<Link
								to={{}}
								onClick={() => {
									this.props.answerId(String(item.id))
									this.props.questionId(String(item.id))
								}}
							>
								{item.nameOfAnswer}
							</Link>
						</li>
					) : null}
				</React.Fragment>
			)
		})
		return <React.Fragment>{renderAnswers}</React.Fragment>
	}

	renderScript() {
		const { script } = this.props
		return (
			<div>
				<h1 className="ml-2 h3">{script.nameOfScript}</h1>
				<hr />
				<div className="card-body">{this.renderQuestions()}</div>
			</div>
		)
	}
	render() {
		const { script, quest } = this.props
		return (
			<Container>
				<Row>
					<Col xs="8">
						{script && this.renderScript()}
						<div>
							{quest.questionId > 1 ? (
								<Link
									to={{}}
									className="ml-5 mt-3"
									onClick={() => {
										this.props.answerId('0')
										this.props.questionId('0')
									}}
								>
									Вернуться к началу разговора
								</Link>
							) : null}
						</div>
					</Col>
					<Col xs="4">
						<MapBar />
					</Col>
				</Row>
			</Container>
		)
	}
}

function mapStateToProps(state) {
	return {
		script: getScriptById(state, state.scriptPage.id),
		quest: state.questionMap,
		answer: state.answerMap
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchScriptById: id => dispatch(fetchScriptById(id)),
		questionId: id => dispatch(questionId(id)),
		answerId: id => dispatch(answerId(id))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ViewScript)
