export function users (state = [], action) {
    switch (action.type) {
      case 'USERS':
        return action.payload
      default:
        return state
    }
}

export function sent (state = false, action) {
    switch (action.type) {
      case 'USER_SENT':
        return !state
      default:
        return state
    }
}

export function login(state = null, action = {}) {
    switch (action.type) {
        case 'LOGIN_SUCCESS': 
          return action.id;  
        case 'LOGOUT': 
          return action.id;   
        default:
            return state;
    }
}
