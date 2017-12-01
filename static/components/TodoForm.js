import React, { Component } from 'react';
import List from './List';

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        if(this.state.term == '') {
            return false;
        } else {
            this.list.addTodo(this.state.term);
            this.setState({term: ''});
        }
    }

    onChange = (event) => {
        this.setState({term: event.target.value})
    }

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange} />
                    <button type="submit">Add ToDo</button>
                </form>
                <List ref={(list) => this.list = list} />
            </div>    
        );
    }
}


export default TodoForm;