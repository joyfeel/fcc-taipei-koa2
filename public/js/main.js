import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import App from './containers/App'
import Typed from './containers/Typed'
import LoginMainpage from './containers/LoginMainpage'
import InputRegisterForm from './containers/InputRegisterForm'

import configureStore from './store'
import DevTools from './utils/redux-dev'

import '../css/main.scss'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Typed} />
          <Route path="/login" component={LoginMainpage} />
          <Route path="/register" component={InputRegisterForm} />
        </Route>
      </Router>
      {/* <DevTools /> */}
    </div>
  </Provider>,
  document.getElementById('app')
)
