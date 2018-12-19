import React from 'react'
import { connect } from 'react-redux'
import { getScriptById } from '../../selectors/'
import { answerId, questionId } from '../../redux/actions/script'
import { Link } from 'react-router-dom'
import './MapBar.scss'

class MapBar extends React.Component {
	componentWillUnmount() {
		this.props.answerId('0')
		this.props.questionId('0')
	}

	renderQuestions() {
		const { script } = this.props
		const renderQuestions = script.questions.map(item => {
			return (
				<li key={item.id} className="mt-1 mb-1">
					<Link
						className="text-success"
						to={{}}
						onClick={() => {
							this.props.answerId(item.id)
							this.props.questionId(item.id)
						}}
					>
						{item.nameOfQuestion}
					</Link>
				</li>
			)
		})
		return <ul>{renderQuestions}</ul>
	}

	render() {
		const { script } = this.props

		return (
			<div className="card mapbar">
				<h2 className="h4 mt-4 mb-3 text-center">Карта разговора</h2>
				<hr />
				{script && this.renderQuestions()}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		script: getScriptById(state, state.scriptPage.id)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		answerId: id => dispatch(answerId(id)),
		questionId: id => dispatch(questionId(id))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MapBar)
