import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as noteActions from '../actions';
import List from './List';
import Footer from './Footer';
import './style/TodoForm.sass';


class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            _id: '',
            searchText: '',
        };
    }

    componentDidMount () {
        this.props.actions.fetchNotes();
    }

    onSubmit = event => {
        event.preventDefault();

        const { text, _id } = this.state;
        const date = new Date().getSeconds();

        const note = {
            text,
            date,
            completed: false,
        }

        if (!this.state._id) {
            this.props.actions.addNote(note);
        } else {
            const updatedElement = {
                text,
                _id,
                date,
            };
            this.props.actions.updateNote(updatedElement);
        }
        
        this.setState({
            text: '',
            _id: '',
        });
    }

    onChange = event => {
        this.setState({text: event.target.value,});
    }
    
    onHandleEdit = (text, _id) => {
        this.setState({
            text,
            _id,
        });
    }

    onHandleRemove = (item) => {
        this.props.actions.deleteNote(item);
    }

    onHandleSearch = (event) => {
        this.setState({
            searchText: event.target.value,
        })
    }

    onHandleClick = (item) => {
        const { text, _id, date, completed} = item;
        const updatedElement = {
            text,
            _id,
            date,
            completed: !completed,
        };
        this.props.actions.updateNote(updatedElement);
    }

    onHandleSetVisibility = (filter) => {
        this.props.actions.setVisibilityFilter(filter);
    }

    onHandleSort = (event) => {
        event.preventDefault();
        const sortFilter = this.props.sortFilter;
        this.props.actions.sortTodo(!sortFilter);
    }

    render () {
        const { _id, text, searchText } = this.state;
        const { todos, sortFilter } = this.props;

        return (
            <div>
                <div className='wrapper'>
                    <input
                        type="text"
                        placeholder='Search...'
                        onChange={this.onHandleSearch}
                        className='search-field'

                    />
                    <button
                        onClick={this.onHandleSort}
                        className='btn btn-sort'>{(!sortFilter) ? 'Sort' : 'Unsort'}
                    </button>
                </div>
                <form onSubmit={this.onSubmit} className='todo-form'>
                    <textarea
                        placeholder='Enter note text'
                        className='input-field'
                        rows={3}
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <button
                        type="submit"
                        className='btn btn-add'
                        disabled={!text}
                    >
                        {(!_id) ? 'Add Note' : 'Save Changes'}
                    </button>
                </form>
                <List
                    onHandleEdit={this.onHandleEdit}
                    onHandleRemove={this.onHandleRemove}
                    onHandleClick={this.onHandleClick}
                    todoItems={todos}
                    searchText={searchText}
                />
                <Footer onHandleSetVisibility={this.onHandleSetVisibility} />
            </div>
        );
        
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(elem => elem.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(elem => !elem.completed)
    }
}

const getSortTodo = (todos, sortFilter) => {
    function sortItems (itemA, itemB) {
        if (sortFilter) {
            return itemA.date - itemB.date;
        } else return itemB.date - itemA.date;
    }
    const items = [...todos];
    return items.sort(sortItems);
}

const mapStateToProps = (state) => {
    const { todos, sortFilter, visibilityFilter } = state;

    return {
        todos: getSortTodo(getVisibleTodos(todos, visibilityFilter), sortFilter),
        sortFilter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(noteActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
