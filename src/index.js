import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App/App'
import { Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {createBrowserHistory} from 'history'
import rootReducers from './redux/reducers/rootReducers'

const history = createBrowserHistory()

const store = createStore(
	rootReducers,
	composeWithDevTools(applyMiddleware(thunk))
)

const application = (
	<Router history={history}>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>
)

ReactDOM.render(application, document.getElementById('root'))
