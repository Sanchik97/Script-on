import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Scripts from '../Scripts/Scripts'
import Layout from '../../hoc/Layout/Layout'
import ViewScript from '../ViewScript/ViewScript'
import Admin from '../Admin/Admin'
import AddNewScript from '../AddNewScript/AddNewScript'
import Page404 from '../../components/Page404/Page404'

class App extends Component {
	render() {
		return (
			<Layout>
				<Switch>
					<Route exact path="/" component={Scripts} />
					<Route path="/viewscript/:id" component={ViewScript} />
					<Route path="/admin" exact component={Admin} />
					<Route path="/admin/addnewscript" component={AddNewScript} />
					<Route path="*" component={Page404}/>
				</Switch>
			</Layout>
		)
	}
}

export default App
