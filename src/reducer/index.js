import { combineReducers } from 'redux'
import {users, sent, login } from './users'
import {game} from './game'

const allReducers = combineReducers({
  users,
  sent,
  login,
  game,
})
export default allReducers