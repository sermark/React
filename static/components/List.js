import React, { Component } from 'react';
import ListItem from './ListItem';
import uuidv4 from 'uuid/v4'; // generate unique id (redis)

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    addTodo = (props) => {
        let newItem = {
            text: props.term,
            date: new Date().getSeconds(),
            id: uuidv4(),
        }
        let newItems = [...this.state.items, newItem];
        this.setState({
            items: newItems,
        });
    }

    applyEdit = (props) => {
        let editItems = [...this.state.items];
        editItems.forEach(elem => {
            if (elem.id === props.id) {
                elem.text = props.term
            }
        })

        this.setState({
            items: editItems,
        });
    }

    editItem = (item) => {
        this.props.onEdit(item);
    }

    removeItem = (item) => {
        let filterItems = this.state.items.filter((elem) => {
            return elem.id !== item.id;
        });

        this.setState({
            items: filterItems,
        });
    }

    sort = (props) => {
        function sortItems (itemA, itemB) {
            if (props.sort) {
                return itemA.date - itemB.date;
            } else return itemB.date - itemA.date;
        }
        let sortArray = [...this.state.items];
        sortArray.sort(sortItems);
        this.setState({
            items: sortArray,
        });
    }

    createTodoList () {
        const todoList =[];
        this.state.items.forEach(item => {
            todoList.push(
                <ListItem key={item.id} item={item} id={item.id} removeItem={this.removeItem} editItem={this.editItem}/>
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