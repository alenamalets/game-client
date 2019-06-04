import { combineReducers } from 'redux'
import {users, sent, login } from './users'
import {game, sentGame} from './game'

const allReducers = combineReducers({
  users,
  sent,
  login,
  game,
  sentGame
})
export default allReducers