import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
// import pick from 'lodash.pick'
import * as reducers from './reducers'
// import { loadState, saveState } from 'Client/utils/localStorage'

const preservedState = {} //loadState()


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combineReducers(reducers),
  preservedState,
  composeEnhancers(applyMiddleware(thunk))
)

// store.subscribe(() => {
//   const state = pick(store.getState(), [
//   ])
//   saveState(state)
// })

export default store


export const getState = store.getState
export const dispatch = store.dispatch
