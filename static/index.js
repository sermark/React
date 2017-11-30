// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import './main.sass';

// import AddToDo from './components/addtodo';

// const dest = document.getElementById('root');

// class App extends Component {
//   render = () => {
//     return ( 
//         <AddToDo />
//     );
//   }
// }

// ReactDOM.render(<App />, dest);


import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)