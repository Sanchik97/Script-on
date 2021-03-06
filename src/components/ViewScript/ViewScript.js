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

import './viewScript.scss'

class ViewScript extends React.Component {
	componentDidMount() {
		this.props.fetchScriptById(this.props.match.params.id)
	}

	renderQuestions() {
		const { script, answer } = this.props
		const renderQuestions = script.questions.map(item => {
			return (
				<React.Fragment key={item.id}>
					{item.answerId === answer.answerId ? (
						<React.Fragment>
							<h2 className="mb-4 h4">
								{item.answerId > 0 ? (
									<i className="fas fa-user-tie mr-3 mb-3" />
								) : (
									<i className="fas fa-comments mr-3 mb-3" />
								)}
								{item.answerName ? item.answerName : "Начало разговора"}
							</h2>
							<p>
								<i className="fas fa-headset mr-2" style={{fontSize: `1.5rem`}}/>
								{item.nameOfQuestion}
							</p>
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
		const renderAnswers = script.answers.map(item => {
			return (
				<React.Fragment key={item.id}>
					{item.questionId === quest.questionId ? (
						<li className="mt-1 mb-1">
							<p
								className="link text-primary"
								onClick={() => {
									this.props.answerId(String(item.id))
									this.props.questionId(String(item.id))
								}}
							>
								{item.nameOfAnswer}
							</p>
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
						<div className="mb-5 ml-5 mt-3 ">
							{quest.questionId > 2 ? (
								<Link
									to={{}}
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
