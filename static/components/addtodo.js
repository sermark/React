import React, { Component } from 'react';
//import List from './list';

class AddToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        const newValue = this.input.value;

        if(newValue == '') {
            return false;
        } else {
            var newItem = {
                text: newValue,
                date: new Date().toLocaleTimeString(),
            }
            
            var newItems = [...this.state.items].push(newItem);

            this.setState({
                items: newItems
            });

        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref={(input) => this.input = input} />
                    <button type="submit">Add ToDo</button>
                </form>
                <ul>
                    {
                    this.state.items.map((item,index) => <li key={index}>
                        {item.text}
                        <span>{item.date}</span>
                        <button>Edit</button>
                        <button>Remove</button>
                    </li>)
                    }
                </ul> 
            </div>   
        );
    }
}

// const setDate = () => {
//     const todayDate = new Date();
//     const date = todayDate.getDate() + '.' + (todayDate.getMonth() + 1) + '.' + todayDate.getFullYear() + '-' + todayDate.getSeconds(); 
//     return date;
// }   

export default AddToDo;