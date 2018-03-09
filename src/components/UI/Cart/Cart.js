import React from 'react';

import Image from '../../../assets/shopping-purse-icon.png';
import classes from './Cart.css';

const cart = () => {
    return (
        <div className={classes.Cart}>
            <img src={Image} alt='cart' />
        </div>
    );
}

export default cart;
