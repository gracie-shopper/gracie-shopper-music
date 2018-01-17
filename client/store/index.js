import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form';
import user from './user'
import watches from './watches'
import watch from './watch'
import cart from './cart'
import orders from './orders'
import order from './order'
import users from './users'
import adminReducer from './adminReducer'
import review from './review'
import reviews from './reviews'

const reducer = combineReducers({user, watches, watch, cart, orders, users, order, review, reviews, adminReducer, form: formReducer})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({
    collapsed: true,
    predicate: (getState, action) => (!action.type.includes('@@redux-form'))
  })
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './watches'
export * from './watch'
export * from './cart'
export * from './orders'
export * from './users'
export * from './order'
export * from './reviews'
export * from './review'
export * from './adminReducer'
