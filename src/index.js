import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App/App'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const application = (
	<BrowserRouter>
		<App />
	</BrowserRouter>
)

ReactDOM.render(application, document.getElementById('root'))
