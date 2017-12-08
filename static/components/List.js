import React, { Component } from 'react';
import ListItem from './ListItem';
import uuidv4 from 'uuid/v4'; // generate unique id

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    addTodo = props => {
        const newItem = {
            text: props.term,
            date: new Date().getSeconds(),
            id: uuidv4(),
        }
        const items = [...this.state.items, newItem];

        this.setState({
            items,
        });

        this.props.copyArray(items);
    }

    applyEdit = props => {
        const items = props.itemsList.map(elem => {
            if (elem.id === props.id) {
                elem.text = props.term
            }
            return elem
        })

        this.setState({
            items,
        });
    }

    editItem = item => {
        this.props.onEdit(item);
    }

    removeItem = item => {
        const items = this.state.items.filter(elem => elem.id !== item.id);

        this.setState({
            items,
        });

        this.props.copyArray(items);
    }

    searchItem = searchText => {
        const items = this.props.itemsList.filter(elem => elem.text.toLowerCase().includes(searchText.toLowerCase()));
        
        this.setState({
            items,
        });
    }

    sort = props => {
        function sortItems (itemA, itemB) {
            if (props.sort) {
                return itemA.date - itemB.date;
            } else return itemB.date - itemA.date;
        }
        const items = [...this.state.items];
        items.sort(sortItems);
        this.setState({
            items,
        });

        this.props.copyArray(items);
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
