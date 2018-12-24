import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import { Editor as TextEditor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './Editor.scss'
import { connect } from 'react-redux'
import { editorValueHandler } from '../../redux/actions/script'

class Editor extends React.Component {
	state = {
		editorState: ''
	}

	editorHandler = editorState => {
		this.setState({
			editorState
		})
	}

	render() {
		return (
			<React.Fragment>
				<Modal
					isOpen={this.props.editor}
					className={this.props.className}
					toggle={this.props.toggle}
				>
					<ModalHeader toggle={this.props.toggle}>
						Реплика оператора
					</ModalHeader>
					<ModalBody>
						<TextEditor
							editorState={this.state.editorState}
							toolbarClassName="toolbarClassName"
							wrapperClassName="wrapperClassName"
							editorClassName="editorClassName"
							onEditorStateChange={this.editorHandler}
						/>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.props.toggle}>
							Сохранить
						</Button>
						<Button color="secondary" onClick={this.props.toggle}>
							Отменить
						</Button>
					</ModalFooter>
				</Modal>
			</React.Fragment>
		)
	}
}

function mapStateToProps(state) {
	return {
		editorValue: state.editorValue
	}
}

function mapDispatchToProps(dispatch) {
	return {
		editorValueHandler: event => dispatch(editorValueHandler(event))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Editor)
