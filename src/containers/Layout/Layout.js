import React, { Component } from 'react';


import Navigation from '../../components/Navigation/Navigation';
import Cart from '../../components/UI/Cart/Cart';
import classes from './Layout.css';

class Layout extends Component {
    render() {
        return (
            <header className={classes.Layout}>
                <Navigation />
                <Cart />
            </header>
        );
    };
}

export default Layout;
