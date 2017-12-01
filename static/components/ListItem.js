import React, { Component } from 'react';

const ListItem = props => (
    <li>
        {props.item.text}
        <span>{props.item.date}</span>
        <button onClick={() => props.editItem(props.item)}>Edit</button>
        <button onClick={() => props.removeItem(props.item)}>Remove</button>
    </li>
);

export default ListItem;
