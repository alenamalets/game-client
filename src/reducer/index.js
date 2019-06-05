import { combineReducers } from 'redux'
import {users, sent, login } from './users'
import {game, sentGame, currentGame, updateGame} from './game'

const allReducers = combineReducers({
  users,
  sent,
  login,
  game,
  sentGame,
  updateGame,
  currentGame
})
export default allReducers