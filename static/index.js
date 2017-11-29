import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './main.sass';

import AddToDo from './components/addtodo';

const dest = document.getElementById('root');

class App extends Component {
  render() {
    return ( 
        <AddToDo />
    );
  }
}

ReactDOM.render(<App />, dest);
