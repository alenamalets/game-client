import request from 'superagent'
const baseUrl = 'http://localhost:4000'

export function sendGame (data) {
  request
    .post(`${baseUrl}/game`)
    .send(data)
    .then()
  return { type: 'GAME_SENT' }
}