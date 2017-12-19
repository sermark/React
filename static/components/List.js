import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as noteActions from '../actions';

import ListItem from './ListItem';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    createTodoList () {
        const todoList = [];
        this.props.todoItems.forEach(item => {
            todoList.push(
                <ListItem 
                    key={item._id}
                    item={item}
                    id={item._id}
                    handleRemove={this.handleRemove}
                    handleEdit={this.handleEdit}
                    handleClick={this.handleClick}
                />
            )
        });
        return todoList; 
    }

    searchItems = (searchText) => {
        const searchList = [];
        this.props.todoItems.forEach(item => {
            if (item.text.toLowerCase().includes(searchText.toLowerCase())){
                searchList.push(
                    <ListItem 
                        key={item._id}
                        item={item}
                        id={item._id}
                        handleRemove={this.handleRemove}
                        handleEdit={this.handleEdit}
                        handleClick={this.handleClick}
                    />
                )
            }
        });
        return searchList
    }

    handleRemove = (item) => {
        this.props.onHandleRemove(item);
    }

    handleClick = (item) => {
        this.props.onHandleClick(item);
    }

    handleEdit = (text, id) => {
        this.props.onHandleEdit(text, id);
    }

    render () {
        const { searchText } = this.props;
        return (
            <ul>
                {(!searchText) ? this.createTodoList() : this.searchItems(searchText)}
            </ul> 
        );
    }
}

export default List;