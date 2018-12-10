import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App/App'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from './redux/reducers/rootReducers'

const store = createStore(
	rootReducers,
	composeWithDevTools(applyMiddleware(thunk))
)

const application = (
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
)

ReactDOM.render(application, document.getElementById('root'))
