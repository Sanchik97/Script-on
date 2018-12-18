import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Scripts from '../Scripts/Scripts'
import Layout from '../../hoc/Layout/Layout'
import ViewScript from '../ViewScript/ViewScript'
import Admin from '../Admin/Admin'
import AddNewScript from '../AddNewScript/AddNewScript'

class App extends Component {
	render() {
		return (
			<Layout>
				<Route path="/" exact component={Scripts} />
				<Route path="/viewscript/:id" component={ViewScript} />
				<Route path="/admin" exact component={Admin} />
				<Route path="/admin/addnewscript" component={AddNewScript} />
			</Layout>
		)
	}
}

export default App
