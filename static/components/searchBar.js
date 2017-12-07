import React, { Component } from 'react';

class SearchBar extends Component {

    onChange = (event) => this.props.search(event.target.value)

    render () {
        return (
            <input type="text" placeholder="Search..." onChange={this.onChange}/>
        );
    }
}

export default SearchBar;
