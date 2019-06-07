export function game (state = [], action) {
    switch (action.type) {
      case 'GAME':
        return action.payload
      default:
        return state
    }
}

