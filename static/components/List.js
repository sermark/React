import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as noteActions from '../actions';

import ListItem from './ListItem';
import './style/List.sass'

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    searchItems = (searchText) => {
        return this.props.todoItems.reduce((acc, item) => {
            if (!searchText || item.text.toLowerCase().includes(searchText.toLowerCase())){
                acc.push(
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
            return acc;
        }, []);
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
            <ul className='note-list'>
                {this.searchItems(searchText)}
            </ul> 
        );
    }
}

export default List;
