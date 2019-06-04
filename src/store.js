import { applyMiddleware, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import socketset from 'socketset'
import reducer from './reducer'



const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x

  const socket = socketset('localhost:4000')

  const middleware = applyMiddleware(reduxThunk, socket)
  
  const enhancer = compose(middleware, devTools)
  
  const store = createStore(reducer, enhancer)
  
  const action = { type: 'SOCKETSET_CONNECT' }
  store.dispatch(action)
  
  export default store