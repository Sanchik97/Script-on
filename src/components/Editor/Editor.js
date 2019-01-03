import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import './Editor.scss'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

class Editor extends React.Component {
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
						<ReactQuill
							value={this.props.nameOfQuestion}
							onChange={this.props.nameOfQuestionHandler}
						/>
					</ModalBody>
					<ModalFooter>
						<Button color="secondary" onClick={this.props.toggle}>
							Закрыть
						</Button>
					</ModalFooter>
				</Modal>
			</React.Fragment>
		)
	}
}

export default Editor
