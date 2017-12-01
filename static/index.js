import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './main.sass';

import TodoForm from './components/TodoForm';

const dest = document.getElementById('root');

class App extends Component {
  render() {
    return ( 
        <TodoForm />
    );
  }
}

ReactDOM.render(<App />, dest);
