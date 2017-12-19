import { combineReducers } from 'redux';
import todos from './todos';
import sortFilter from './sort';
import visibilityFilter from './visibilityFilter';


const todoApp = combineReducers({
    todos,
    sortFilter,
    visibilityFilter,
});

export default todoApp;
