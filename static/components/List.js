import React, { Component } from 'react';
import ListItem from './listitem';
import uuidv4 from 'uuid/v4';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
        this.removeItem = this.removeItem.bind(this)
    }

    onSubmit = (event) => {
        event.preventDefault();
        const newValue = this.input.value;
        
        if(newValue == '') {
            return false;
        } else {
            var newItem = {
                text: newValue,
                date: new Date().toLocaleTimeString(),
                id: uuidv4()
            }
            var newItems = [...this.state.items, newItem];

            this.setState({
                items: newItems
            });
            
            this.input.value = '';
        }
    }

    removeItem (item) {
        let filterItems = this.state.items.filter((eq) => {
            return eq.id !== item.id
        });

        this.setState({
            items: filterItems
        });
    }

    createTodoList () {
        const todoList =[];
        this.state.items.map(item => {
            todoList.push(
                <ListItem key={item.id} item={item} id={item.id} removeItem={this.removeItem}/>
            )
        });
        return todoList; 
    }

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref={(input) => this.input = input} />
                    <button type="submit">Add ToDo</button>
                </form>
                <ul>
                    {this.createTodoList()}
                </ul> 
            </div>   
        );
    }
}

// const setDate = () => {
//     const todayDate = new Date();
//     const date = todayDate.getDate() + '.' + (todayDate.getMonth() + 1) + '.' + todayDate.getFullYear() + '-' + todayDate.getSeconds(); 
//     return date;
// }   

export default List;