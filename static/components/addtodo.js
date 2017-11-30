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
        const newValue = this.state.term;

        if(newValue == '') {
            return false;
        } else {
            const newItem = {
                text: newValue,
                date: this.setDate(),
                visible: true
            }
            const newItems = [...this.state.items, newItem];
            this.setState({
                term: '',
                items: newItems,
            });
        }
    }

    onChange = (event) => {
        this.setState({term: event.target.value});
    }

    setDate = () => {
        const todayDate = new Date();
        const date = todayDate.getDate() + '.' + (todayDate.getMonth() + 1) + '.' + todayDate.getFullYear() + '-' + todayDate.getSeconds(); 
        return date;
    }

    render = () => {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange = {this.onChange} />
                    <button type="submit">Add ToDo</button>
                </form>
                <ul>
                    {
                    this.state.items.map((item,index) => <li key={index}>
                        {item.text}
                        <span>{item.date}</span>
                        <button>Edit</button>
                        <button onClick={this.deleteItem}>Remove</button>
                    </li>)
                    }
                </ul> 

                {/* <List items={this.state.items} onClick={this.deleteItem}/>   */}
            </div>   
        );
    }
}

export default AddToDo;