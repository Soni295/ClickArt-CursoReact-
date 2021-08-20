import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/general.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.register()
