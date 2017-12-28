const todos = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_NOTES_SUCCESS':
            return state = action.payload
    
        default:
            return state
    }
}

export default todos;