import React, { Component } from 'react';

const List = props => (
    <ul>
        {
            props.items.map((item,index) => <li key={index}>
                {item}
                    <button>Edit</button>
                    <button>Remove</button>
                </li>)
        }
    </ul>    
);

export default List;