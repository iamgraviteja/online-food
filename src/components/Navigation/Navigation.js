import React from 'react';

import classes from './Navigation.css'
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = (props) => {
    return (
        <nav className={classes.Navigation}>
            <ul>
                <NavigationItem link="/">Restaurants</NavigationItem>
                <NavigationItem link="/orders">Orders</NavigationItem>
            </ul>
        </nav>
    );
};

export default Navigation;
