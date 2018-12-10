import React from 'react'
import { connect } from 'react-redux'
import { getScriptById } from '../../selectors/'
import { questionId } from '../../redux/actions/script'
import { Link } from 'react-router-dom'

class MapBar extends React.Component {
	componentWillUnmount(){
		this.props.questionId('1')
	}
	renderQuestions() {
		const { script } = this.props

		const renderQuestions = script.questions.map((item, index) => {
			return (
				<li key={index} className="mt-1 mb-1">
					<Link to={{}} onClick={() => this.props.questionId(item.id)}>{item.nameOfQuestion}</Link>
				</li>
			)
		})
		return <ul>{renderQuestions}</ul>
	}

	render() {
		const { script } = this.props

		return (
			<div className="card">
				<h2 className="h3 mt-5 mb-4 text-center">Карта вопросов</h2>
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
		questionId: id => dispatch(questionId(id))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MapBar)
