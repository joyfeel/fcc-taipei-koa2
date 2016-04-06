import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './containers/App'
//import Wrapper from './containers/Wrapper'
import Typed from './containers/Typed'
import LoginMainpage from './containers/LoginMainpage'
import InputRegisterForm from './containers/InputRegisterForm'

import '../css/main.scss'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Typed} />
      <Route path="/login" component={LoginMainpage} />
      <Route path="/register" component={InputRegisterForm} />
    </Route>
  </Router>,
  document.getElementById('app')
)
