import request from 'superagent'
const baseUrl = 'https://arcane-peak-40379.herokuapp.com'

export function sendGame (data) {
  request
    .post(`${baseUrl}/game`)
    .send(data)
    .then()
  return { type: 'GAME_SENT' }
}


export const updateGameAction = (id, data) => (dispatch) => {
  request
    .put(`${baseUrl}/game/${id}`)
    .send(data)
    .then()
  return{ type: 'GAME_UPDATED'}
}