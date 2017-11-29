import React, { Component } from 'react';
//import List from './list';

class AddToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            items: {
                item : [],
                date: ''
            }
        };
    }

    onSubmit = (event) => {
        const today = new Date();
        event.preventDefault();
        if(this.state.term == '') {
            return false
        } else {
            this.setState({
                term: '',
                items: {
                    item: [...this.state.items.item, this.state.term],
                    date : new Date()
                }
            });
        }
    }
    onChange = (event) => {
        this.setState({term: event.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange = {this.onChange}/>
                    <button type="submit">Add ToDo</button>
                </form>
                {/* <List items={this.state.items}/> */}
                <ul>
                    {
                   
                    

                    this.state.items.item.map((item,index) => <li key={index}>
                        {item.item}
                        <span>{this.state.items.date.toLocaleTimeString()}</span>
                        <button>Edit</button>
                        <button>Remove</button>
                    </li>)
                    }
                </ul> 
            </div>   
        );
    }
}

var h =  {
    getTime: function() {
       var d = new Date();
       var day = d.getDate();
       var mon = d.getMonth();
       var year = d.getFullYear();
       var sec = d.getSeconds();
       var dateAll = day + '.' + mon + '.' + year + "-" + sec;
     
       return dateAll;
    }
  };




const setDate = () => {
    const todayDate = new Date();
    const date = todayDate.getDate() + '.' + (todayDate.getMonth() + 1) + '.' + todayDate.getFullYear() + '-' + todayDate.getSeconds(); 
    return date;
}   

// const List = props => (
//     <ul>
//         {
//             props.items.map((item,index) => <li key={index}>
//                 {item}
//                 <span>{setDate()}</span>
//                 <button>Edit</button>
//                 <button>Remove</button>
//             </li>)
//         }
//     </ul>    
// );

export default AddToDo;