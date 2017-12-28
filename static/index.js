import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/Store';
import './main.sass';


import App from './components/App';

const dest = document.getElementById('root');
let store = configureStore();

render(
  <Provider store={store}>
    <App/>
  </Provider>, dest
)