import React, { Component } from 'react';
import './style/ListItem.sass';

const ListItem = props => (
    <li className='note'>
        <p
            onClick={() => props.handleClick(props.item)}
            style={{textDecoration: props.item.completed ? 'line-through' : 'none'}}
        >
            {props.item.text}
        </p>
        <span>{props.item.date}</span>
        <button onClick={() => props.handleEdit(props.item.text, props.item._id)}>Edit</button>
        <button onClick={() => props.handleRemove(props.item)}>Remove</button>
    </li>
);

export default ListItem;
