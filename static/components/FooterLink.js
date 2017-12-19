import React, { Component } from 'react';

class FooterLink extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: 'SHOW_ALL',
        };
    }

    onClick = event => {
        event.preventDefault();
        
        this.setState({
            filter: event.target.dataset.filter,
        });
        this.props.onHandleSetVisibility(event.target.dataset.filter);
        
        const activeLink = document.querySelector('.active');
        const links = document.querySelectorAll('.link');

        links.forEach(elem => {
            elem.addEventListener('click', function () {
                activeLink.classList.remove('active');
                elem.classList.add('active');
            });
        });
    }

    render () {
        return (
            <ul>
                <li><a href="#" onClick={this.onClick} data-filter='SHOW_ALL' className='link active'>All</a></li>
                <li><a href="#" onClick={this.onClick} data-filter='SHOW_COMPLETED' className='link'>Completed</a></li>
                <li><a href="#" onClick={this.onClick} data-filter='SHOW_ACTIVE' className='link'>Active</a></li>
            </ul> 
        );
    }
}
export default FooterLink;