import React, { Component } from 'react';
import List from './List';

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            id: '',
            sort: false,
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.id === '') {
            if(this.state.term === '') {
                return false;
            } else this.list.addTodo(this.state);
        } else this.list.applyEdit(this.state);

        this.setState({
            term: '',
            id: '',
        });
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

    sorting = (event) => {
        event.preventDefault();
        this.list.sort(this.state);
        this.setState({
            sort: !this.state.sort,
        });
    }

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange} ref={(input) => this.input = input} />
                    <button type="submit">{(this.state.id === '') ? 'addTodo' : 'applyEdit'}</button>
                    <button onClick={this.sorting}>{this.state.sort ? 'Sort(up)' : 'Sort(down)'}</button>
                </form>
                <List ref={(list) => this.list = list} onEdit={this.onEdit} />
            </div>    
        );
    }
}

export default TodoForm;