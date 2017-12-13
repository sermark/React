const initialState = {
    sortFilter: false,
    todos: []
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {
                text: action.text,
                id: action.id,
                completed: false,
                date: new Date().getSeconds(),         
            };
            return Object.assign({}, state, {
                todos: [...state.todos, newTodo]
            })

        case 'REMOVE_TODO':
            const items = state.todos.filter(elem => elem.id !== action.id);
            return Object.assign({}, state, {todos: items})
        
        case 'EDIT_TODO':
            return Object.assign({}, state, {
                todos: state.todos.map(todo => {
                    if(todo.id === action.id) {
                        return Object.assign({}, todo, {
                            text: action.text,
                            date: new Date().getSeconds(),
                        })
                    }
                    return todo
                }),
            })

        case 'TOGGLE_TODO': 
            return Object.assign({}, state, {
                todos: state.todos.map(todo => {
                    if (todo.id === action.id) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed,
                        })
                    }
                    return todo
                })
            })

        default:
            return state    
    }
}

export default todos;