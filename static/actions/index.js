import uuidv4 from 'uuid/v4'; // generate unique id

let nextTodoId = 0
//--------Action Creators
//  action creators return an action
//  to initiate a dispatch, pass the result to the dispatch() function:
//  dispatch(addTodo(text))


export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  }
}

export const removeTodo = id => {
  return {
    type: 'REMOVE_TODO',
    id,
  }
}

export const editTodo = (text, id) => {
  return{
    type: 'EDIT_TODO',
    id,
    text,
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id,
  }
}

export const sortTodo = sortFilter => {
  return {
    type: 'SET_SORT',
    sortFilter,
  }
}

// export const setVisibilityFilter = (filter) => {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter: filter
//   }
// }
