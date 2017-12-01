import React, { Component } from 'react';

const ListItem = props => (
    <li>
        {props.item.text}
        <span>{props.item.date}</span>
        <button>Edit</button>
        <button onClick={() => props.removeItem(props.item)}>Remove</button>
    </li>
);

export default ListItem;
