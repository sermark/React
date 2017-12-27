import React, { Component } from 'react';
import './style/Footer.sass';

class Footer extends Component {
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
        const links = document.querySelectorAll('.btn-select');

        links.forEach(elem => {
            elem.addEventListener('click', function () {
                activeLink.classList.remove('active');
                elem.classList.add('active');
            });
        });
    }

    render () {
        return (
            <div className='footer-container'>
                <button onClick={this.onClick} data-filter='SHOW_ALL' className='btn btn-select active'>All</button>
                <button onClick={this.onClick} data-filter='SHOW_COMPLETED' className='btn btn-select'>Completed</button>
                <button onClick={this.onClick} data-filter='SHOW_ACTIVE' className='btn btn-select'>Active</button>
            </div> 
        );
    }
}
export default Footer;