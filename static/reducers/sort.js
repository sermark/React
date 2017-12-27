const sortFilter = (state = false, action) => {
    switch (action.type) {
        case 'SET_SORT':
            return action.sortFilter
        default:
            return state
    }
}
  
export default sortFilter