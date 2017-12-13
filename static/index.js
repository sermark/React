import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import configureStore from './store/Store';
import { addTodo, removeTodo, editTodo, toggleTodo, sortTodo } from './actions'


import App from './components/App';

let store = configureStore();


let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

// store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about actions2'));
// store.dispatch(addTodo('Learn about actions4'));


// store.dispatch(editTodo("ololo", 0));

// store.dispatch(toggleTodo(2));

// store.dispatch(sortTodo(true));
// store.dispatch(sortTodo(false));


render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)