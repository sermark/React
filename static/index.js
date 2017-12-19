import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import configureStore from './store/Store';
import { addTodo, removeTodo, editTodo, toggleTodo, sortTodo } from './actions'


import App from './components/App';

let store = configureStore();

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)