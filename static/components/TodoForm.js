import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as noteActions from '../actions';


class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        };
    }

    onSubmit = event => {
        event.preventDefault();
        if (!this.state.text.trim()) {
            return
        }
        this.props.actions.addTodo(this.state.text);
        this.setState({text: '',});
    }

    onChange = event => {
        this.setState({text: event.target.value,});
        console.log(this.props.todos);
    }
    
    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange} />
                    <button type="submit">AddTodo</button>
                </form>
            </div>    
        );
        
    }
}

function mapStateToProps(state) {
    return {
      todos: state,
      
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(noteActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
