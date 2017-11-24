import React, { Component } from 'react';
import List from './list';

class AddToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            items: []
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        if(this.state.term == '') {
            return false
        } else {
            this.setState({
                term: '',
                items: [...this.state.items, this.state.term]
              });
        }
    }

    onChange = (event) => {
        this.setState({term: event.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange = {this.onChange}/>
                    <button type="submit">Add ToDo</button>
                </form>
                <List items={this.state.items}/>
            </div>   
        );
    }
}

export default AddToDo;