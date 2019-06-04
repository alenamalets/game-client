export function game (state = [], action) {
    switch (action.type) {
      case 'GAME':
        return action.payload
      default:
        return state
    }
}

export function sentGame (state = false, action) {
    switch (action.type) {
      case 'GAME_SENT':
        return !state
      default:
        return state
    }
}