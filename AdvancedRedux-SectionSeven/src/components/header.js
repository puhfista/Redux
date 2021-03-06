import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

    renderLinks() {
        if (this.props.authenticated) {
            return (
                <li className="nav-item">
                    <Link className='nav-link' to='/signout'>Sign out</Link>
                </li>
            );
        }

        return [
            <li className="nav-item" key='signin'>
                <Link className='nav-link' to='/signin'>Sign in</Link>
            </li>,
            <li className="nav-item" key='signup'>
                <Link className='nav-link' to='/signup'>Sign up</Link>
            </li>
        ];

    }

    render() {
        return (
            <nav className="navBar navbar-light">
                <Link to='/' className='navbar-brand'>Redux Auth</Link>
                <ul className="nav navbar-nav">
                    {this.renderLinks()}
                </ul>
            </nav>
        );
    }
}


export default connect(state => {
    return { authenticated: state.auth.authenticated, }
})(Header);