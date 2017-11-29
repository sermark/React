import React, { Component } from 'react';

const setDate = () => {
    const todayDate = new Date();
    const date = todayDate.getDate() + '.' + (todayDate.getMonth() + 1) + '.' + todayDate.getFullYear() + '-' + todayDate.getSeconds(); 
    return date;
}   

const List = props => (
    <ul>
        {
            props.items.map((item,index) => <li key={index}>
                {item}
                <span>{setDate()}</span>
                <button>Edit</button>
                <button>Remove</button>
            </li>)
        }
    </ul>    
);

export default List;
