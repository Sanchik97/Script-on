import React from 'react'
import './Scripts.scss'
import { connect } from 'react-redux'
import { fetchScripts } from '../../redux/actions/script'
import { getScripts } from '../../selectors/'
import { Container, Table } from 'reactstrap'
import { Link } from 'react-router-dom'

class Scripts extends React.Component {
	componentDidMount() {
		this.props.fetchScripts()
	}

	renderScript(script, index) {
		return (
			<tr key={script.id}>
				<td>{index + 1}</td>
				<td>
					<Link
						to={{
							pathname: '/viewscript/' + script.id
						}}
					>
						{script.nameOfScript}
					</Link>
				</td>
				<td>
					<Link className="ml-2 mr-2" to="">
						<i className="fa fa-sliders-h mr-2" />
						Изменить
					</Link>
					<Link
						className="ml-2 mr-2"
						to={{
							pathname: '/viewscript/' + script.id
						}}
					>
						<i className="fas fa-search mr-2" />
						Предпросмотр
					</Link>
					<Link className="ml-2 mr-2" to={{}}>
						<i className="mr-2 fas fa-trash" />
						Удалить
					</Link>
				</td>
			</tr>
		)
	}
	render() {
		const { scripts } = this.props

		return (
			<div className="Scripts-wrapper">
				<Container>
					<Table bordered hover>
						<thead>
							<tr>
								<th>#</th>
								<th className="w-60">Название скрипта</th>
								<th>Действия</th>
							</tr>
						</thead>
						<tbody>
							{scripts.map((script, index) => this.renderScript(script, index))}
						</tbody>
					</Table>
				</Container>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		scripts: getScripts(state),
		login: state.login
	}
}
function mapDispatchToProps(dispatch) {
	return {
		fetchScripts: () => dispatch(fetchScripts())
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Scripts)
