//import { takeEvery } from 'redux-saga'
import { takeEvery } from 'redux-saga'

function* delay(ms) {
  //return new Promise()
}

export default function* root() {
  yield* takeEvery('QwQ', delay)
}
