import React from 'react'
import './Scripts.scss'
import scriptData from '../../script.json'
import Script from '../../components/Script/Script'
import { Container, Table } from 'reactstrap'

export default class Scripts extends React.Component {
	render() {
		const ScriptTemplate = scriptData.map((item, index) => {
			return <Script index={index + 1} item={item} key={item.id} />
		})

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
						<tbody>{ScriptTemplate}</tbody>
					</Table>
				</Container>
			</div>
		)
	}
}
