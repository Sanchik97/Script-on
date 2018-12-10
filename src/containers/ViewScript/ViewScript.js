import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { getScriptById } from '../../selectors/'
import { fetchScriptById, questionId } from '../../redux/actions/script'
import { Link } from 'react-router-dom'
import MapBar from '../MapBar/MapBar'

class ViewScript extends React.Component {
	componentDidMount() {
		this.props.fetchScriptById(this.props.match.params.id)
	}

	renderQuestions() {
		const { script, quest } = this.props
		const renderQuestions = script.questions.map((item, index) => {
			return (
				<div key={index}>
					{item.id === quest.questionId ? (
						<React.Fragment>
							<h2 className="h3">
								<i className="fas fa-headset mr-3 mb-3" />
								{item.nameOfQuestion}
							</h2>
							<ul>{this.renderAnswers()}</ul>
						</React.Fragment>
					) : null}
				</div>
			)
		})

		return <React.Fragment>{renderQuestions}</React.Fragment>
	}

	renderAnswers() {
		const { script } = this.props
		console.log(this.props)
		const renderAnswers = script.answers.map((item, index) => {
			return (
				<li key={index} className="mt-1 mb-1">
					<Link to={{}}>
						{item.nameOfAnswer}
					</Link>
				</li>
			)
		})
		return <React.Fragment>{renderAnswers}</React.Fragment>
	}

	renderScript() {
		const { script } = this.props
		return (
			<div className="card">
				<h1 className="mt-5 mb-4 ml-5 h3">{script.nameOfScript}</h1>
				<hr />
				<div className="card-body">{this.renderQuestions()}</div>
			</div>
		)
	}

	render() {
		const { script } = this.props
		return (
			<Container>
				<Row>
					<Col xs="8">{script && this.renderScript()}</Col>
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
		quest: state.questionMap
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchScriptById: id => dispatch(fetchScriptById(id)),
		questionId: id => dispatch(questionId(id))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ViewScript)

// $('.clickclick').click(function() {
// 	var nowId = $(this).attr('data-id')

// 	$('.h5').html('asdd')
// 	return false
// })
