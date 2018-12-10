import React from 'react'
import { connect } from 'react-redux'
import { getScriptById } from '../../selectors/'
import { fetchScriptById } from '../../redux/actions/script'

const MapBar = props => {
	const { script } = props
	console.log(script)

	return (
		<div className="card">
			<h2 className="h3 mt-5 mb-4 text-center">Карта вопросов</h2>
			<hr />
		</div>
	)
}

function mapStateToProps(state) {
	return {
		script: getScriptById(state, state.scriptPage.id)
	}
}
function mapDispatchToProps(dispatch) {
	return {
		fetchScriptById: id => dispatch(fetchScriptById(id))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MapBar)
