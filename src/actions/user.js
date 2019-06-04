import request from 'superagent'
const baseUrl = 'http://localhost:4000'

export function sendUser (data) {
  request
    .post(`${baseUrl}/users`)
    .send(data)
    .then()
  return { type: 'USER_SENT' }
}


const loginSuccess = (jwt,id) => ({
    type: 'LOGIN_SUCCESS',
    jwt, id
})

export const login = (email, password) => dispatch => {
  
  
    request
        .post(`${baseUrl}/logins`)
        .send({ email, password })
        .then(response => {
          console.log('body', response.body);
            dispatch(loginSuccess(response.body.jwt,response.body.userid))
        })
        .catch(console.error)
}
