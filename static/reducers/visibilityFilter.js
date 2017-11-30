//  The reducer is a pure function that takes the previous state (initial state) and an action, and returns the next state.

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter
      default:
        return state
    }
}
  
export default visibilityFilter