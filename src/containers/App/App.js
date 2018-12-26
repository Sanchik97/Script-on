import React, { Component } from 'react'
import './App.css'
import { Route, Switch, withRouter } from 'react-router-dom'
import Scripts from '../Scripts/Scripts'
import Layout from '../../hoc/Layout/Layout'
import ViewScript from '../ViewScript/ViewScript'
import Admin from '../Admin/Admin'
import AddNewScript from '../AddNewScript/AddNewScript'
import Page404 from '../../components/Page404/Page404'
import { connect } from 'react-redux'
import Login from '../Login/Login'

class App extends Component {
	render() {
		const { login } = this.props
		return (
			<Layout>
				<Switch>
					<Route exact path="/" component={Scripts} />
					<Route path="/viewscript/:id" component={ViewScript} />
					{login.login ? (
						<Route path="/admin" exact component={Admin} />
					) : (
						<Route path="/admin" exact component={Login} />
					)}
					<Route path="/admin/addnewscript" component={AddNewScript} />
					<Route path="*" component={Page404} />
				</Switch>
			</Layout>
		)
	}
}

function mapStateToProps(state) {
	return {
		login: state.login
	}
}

export default withRouter(connect(mapStateToProps)(App))
