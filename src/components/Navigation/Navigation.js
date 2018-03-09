import React from 'react';

import classes from './Navigation.css'

const Navigation = (props) => {
    return (
        <nav className={classes.Navigation}>
            <ul>
                <li><a>Restaurants</a></li>
                <li><a>Orders</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
