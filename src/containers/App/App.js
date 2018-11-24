import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Scripts from '../Scripts/Scripts'
import Layout from '../../hoc/Layout/Layout'
import ViewScript from '../../components/ViewScript/ViewScript'

class App extends Component {
	render() {
		return (
			<Layout>
			
				<Route path="/" exact component={Scripts} />
				<Route path="/viewscript/:id"  component={ViewScript} />
			</Layout>
		)
	}
}

export default App
