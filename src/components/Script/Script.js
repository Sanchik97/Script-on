import React from 'react'
import { NavLink } from 'react-router-dom'

const Script = props => {

	return (
		<tr key={props.id}>
			<td>{props.index}</td>
			<td>
				<NavLink to={{
					pathname: '/viewscript/' + props.item.id
				}}>
				{props.item.nameOfScript}
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

export default Script
