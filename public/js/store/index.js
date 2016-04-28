import rootReducer from '../reducers'
import rootSaga from '../sagas'
import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import DevTools from '../utils/redux-dev'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState) {
  if (module.hot) {
    //module.hot.accept()
    module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers').default
        store.replaceReducer(nextReducer)
    })
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware
      ),
      DevTools.instrument()
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}
