import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './main.sass';

import TodoForm from './components/TodoForm';
import MyEditor from './components/draft';
import SerchBar from './components/searchBar';
// import axios from 'axios';

const dest = document.getElementById('root');

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

ReactDOM.render(<App />, dest);
