import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './main.sass';

import List from './components/List';

const dest = document.getElementById('root');

class App extends Component {
  render() {
    return ( 
        <List />
    );
  }
}

ReactDOM.render(<App />, dest);
