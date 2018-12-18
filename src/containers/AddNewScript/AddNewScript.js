import React from 'react'
import {
	Input,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from 'reactstrap'
import { connect } from 'react-redux'
import { getScripts } from '../../selectors/'
import { fetchScripts, addNewScriptHandler } from '../../redux/actions/script'

class AddNewScript extends React.Component {
	componentDidMount() {
		this.props.fetchScripts()
	}

	AddNewScriptHandler = () => {
		const { scripts, nameOfNewScript, fetchScripts } = this.props

		scripts.push({
			id: String(Number(scripts.length + 1)),
			nameOfScript: nameOfNewScript.newScriptName,
			questions: [],
			answers: []
		})

		return fetchScripts()
	}

	render() {
		console.log(this.props)
		return (
			<div>
				<Modal
					isOpen={this.props.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
					<ModalHeader toggle={this.toggle}>
						Введите название скрипта
					</ModalHeader>
					<ModalBody>
						<Input
							type="text"
							placeholder="Название скрипта"
							defaultValue=""
							onChange={event =>
								this.props.addNewScriptHandler(event.target.value)
							}
						/>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={() => this.AddNewScriptHandler()}>
							Добавить скрипт
						</Button>
						<Button color="secondary" onClick={this.props.modalToggle}>
							Отмена
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		scripts: getScripts(state),
		nameOfNewScript: state.addNewScriptName
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchScripts: () => dispatch(fetchScripts()),
		addNewScriptHandler: event => dispatch(addNewScriptHandler(event))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddNewScript)
