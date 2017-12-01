import React, { Component } from 'react';
import ListItem from './ListItem';
import uuidv4 from 'uuid/v4'; // generate unique id

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
        this.removeItem = this.removeItem.bind(this)
    }

    addTodo = (text) => {
        var newItem = {
            text: text,
            date: new Date().toLocaleTimeString(),
            id: uuidv4()
        }
        var newItems = [...this.state.items, newItem];

        this.setState({
            items: newItems
        });
    }

    removeItem = (item) => {
        let filterItems = this.state.items.filter((elem) => {
            return elem.id !== item.id
        });

        this.setState({
            items: filterItems
        });
    }

    createTodoList () {
        
        const todoList =[];
        this.state.items.forEach(item => {
            todoList.push(
                <ListItem key={item.id} item={item} id={item.id} removeItem={this.removeItem}/>
            )
        });
        return todoList; 
    }

    render () {
        return (
            <ul>
                {this.createTodoList()}
            </ul> 
        );
    }
}

export default List;