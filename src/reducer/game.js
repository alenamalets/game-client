export function game (state = [], action) {
    switch (action.type) {
      case 'GAME':
        return action.payload
      default:
        return state
    }
}

// export function sentGame (state = false, action) {
//     switch (action.type) {
//       case 'GAME_SENT':
//         return !state
//       default:
//         return state
//     }
// }

// export function updateGame (state = false, action) {
//   switch (action.type) {
//     case 'GAME_UPDATED':
//       return !state
//     default:
//       return state
//   }
// }

// export function currentGame (state = null, action) {
//   switch (action.type) {
//     case 'CURRENT_GAME':
//       return action.payload
//       case 'GAME_UPDATE_SUCCESS':
//       return action.payload
//     default:
//       return state
//   }
// }
