import React, { Component } from 'react';
import './style/ListItem.sass';

const ListItem = props => (
    <li className='note'>
        <p
            className='note-text'
            onClick={() => props.handleClick(props.item)}
            style={{textDecoration: props.item.completed ? 'line-through' : 'none'}}
        >
            {props.item.text}
        </p>
        <span className='note-date'>date:{props.item.date}</span>
        <button onClick={() => props.handleEdit(props.item.text, props.item._id)} className='btn btn-edit'>Edit</button>
        <button onClick={() => props.handleRemove(props.item)} className='btn btn-remove'></button>
    </li>
);

export default ListItem;
