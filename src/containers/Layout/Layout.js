import React, { Component } from 'react';


import Navigation from '../../components/Navigation/Navigation';
import classes from './Layout.css';

class Layout extends Component {
    render() {
        return (
            <header className={classes.Layout}>
                <Navigation />
            </header>
        );
    };
}

export default Layout;
