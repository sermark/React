import React, { Component } from 'react';
import List from './List';

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            id: '',
        };

        this.onEdit = this.onEdit.bind(this);
    }

    onSubmit = (event) => {
        event.preventDefault();
        if(this.state.term == '') {
            return false;
        } else {
            this.list.addTodo(this.state);
            this.setState({
                term: '',
                id: '',
            });
        }
    }

    onEdit = (item) => {
        this.setState({
            term: item.text,
            id: item.id,
        });
        this.input.focus();
    }

    onChange = (event) => {
        this.setState({term: event.target.value})
    }

    sort = (event) => {
        event.preventDefault();
        this.list.sort();
    }

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange} ref={(input) => this.input = input} />
                    <button type="submit">Add ToDo</button>
                    <button onClick={this.sort}>Sort</button>
                </form>
                <List ref={(list) => this.list = list} onEdit={this.onEdit} />
            </div>    
        );
    }
}

export default TodoForm;