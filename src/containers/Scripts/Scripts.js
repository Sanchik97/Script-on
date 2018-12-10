import React from 'react'
import './Scripts.scss'
import { connect } from 'react-redux'
import {fetchScripts} from '../../redux/actions/script'
import {getScripts} from '../../selectors/'
import { Container, Table } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Scripts extends React.Component {
	componentDidMount() {
		this.props.fetchScripts()
	}

	renderScript(script, index) {
		return (
			<tr key={index}>
				<td>{index + 1}</td>
				<td>
					<NavLink
						to={{
							pathname: '/viewscript/' + script.id
						}}
					>
						{script.nameOfScript}
					</NavLink>
				</td>
				<td>
					<NavLink className="ml-2 mr-2" to="">
						<i className="fa fa-sliders-h mr-2" />
						Изменить
					</NavLink>
					<NavLink className="ml-2 mr-2" to="">
						<i className="fas fa-search mr-2" />
						Предпросмотр
					</NavLink>
					<NavLink className="ml-2 mr-2" to="">
						<i className="mr-2 fas fa-trash" />
						Удалить
					</NavLink>
					<NavLink className="ml-2 mr-2" to="">
						<i className="fas fa-download mr-2" />
						Скачать
					</NavLink>
				</td>
			</tr>
		)
	}
	render() {
		const { scripts } = this.props

		return (
			<div className="Scripts-wrapper">
				<Container>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>#</th>
								<th className="w-50">Название скрипта</th>
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
		scripts: getScripts(state)
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
