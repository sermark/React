import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import configureStore from './store/Store';
import { addTodo, removeTodo, editTodo, toggleTodo, sortTodo } from './actions';
import './main.sass';

<<<<<<< HEAD
import TodoForm from './components/TodoForm';
import MyEditor from './components/draft';
import SerchBar from './components/searchBar';
// import axios from 'axios';
=======
>>>>>>> redux

import App from './components/App';

<<<<<<< HEAD
class App extends Component {

    search = searchText => {
        this.todoForm.searching(searchText);
    }

    render() {
        return (
        <div> 
            <SerchBar search={this.search}/>
            <TodoForm ref={(todoForm) => this.todoForm = todoForm}/>
        </div>
        );
    }
}
=======
const dest = document.getElementById('root');
let store = configureStore();
>>>>>>> redux

render(
  <Provider store={store}>
    <App/>
  </Provider>, dest
)