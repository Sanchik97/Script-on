import React from 'react'
import { Input } from 'reactstrap'
import { AnswerInput } from '../AnswerInput/AnswerInput'
import './QuestionInput.scss'
import Editor from '../../containers/Editor/Editor'


export default class QuestionInput extends React.Component {
	state = {
		expand: false,
		count: 0,
		editor: false
	}

	editorToggle = () => {
		this.setState({
			editor: !this.state.editor
		})
	}

	addAnswerInputHandler = () => {
		this.setState({
			count: this.state.count + 1
		})
		console.log(this.state.count)
	}

	expandToggle = () => {
		this.setState({
			expand: !this.state.expand
		})
	}

	render() {
		return (
			<React.Fragment>
				<div
					className="questioninput__block mt-2 mb-2"
					style={
						this.state.expand ? { height: `40px`, overflow: `hidden` } : null
					}
				>
					{this.state.expand ? (
						<i
							className="fas fa-angle-down questioninput__arrow"
							onClick={this.expandToggle}
						/>
					) : (
						<i
							className="fas fa-angle-up questioninput__arrow"
							onClick={this.expandToggle}
						/>
					)}

					<i className="fa fa-headset questioninput__icon" />
					<Input
						type="button"
						className="questioninput"
						placeholder="Введите вопрос"
						defaultValue="Реплика оператора"
						onClick={() => this.editorToggle()}
					/>
					{[...Array(this.state.count)].map(item => (
						<AnswerInput key={item} />
					))}
					<div className="mt-3 mb-3 ml-2">
						<p className="link  text-secondary">
							<i
								className="fas fa-plus"
								onClick={() => this.addAnswerInputHandler()}
							/>
						</p>
					</div>
				</div>

				<Editor editor={this.state.editor} toggle={this.editorToggle} />
			</React.Fragment>
		)
	}
}
