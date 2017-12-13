import { combineReducers } from 'redux';
import todos from './todos';
import sortFilter from './sort';


const todoApp = combineReducers({
    todos,
    sortFilter,
});

export default todoApp;