import { combineReducers } from 'redux'
import {users, sent, login } from './users'
import {game, sentGame, currentGame} from './game'

const allReducers = combineReducers({
  users,
  sent,
  login,
  game,
  sentGame,
  currentGame
})
export default allReducers