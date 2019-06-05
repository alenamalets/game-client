import request from 'superagent'
const baseUrl = 'http://localhost:4000'

export function sendGame (data) {
  request
    .post(`${baseUrl}/game`)
    .send(data)
    .then()
  return { type: 'GAME_SENT' }
}

const gameUpdateSuccess = game => ({
  type: 'GAME_UPDATE_SUCCESS',
  game
})

export const updateGameAction = (id, data) => (dispatch) => {
  request
    .put(`${baseUrl}/game/${id}`)
    .send(data)
    .then()
  return{ type: 'GAME_UPDATED'}
}