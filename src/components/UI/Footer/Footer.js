import React from 'react';

import classes from './Footer.css';

const Footer = (props) => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.Total}>Total: <strong>{props.price}</strong></div>
        </footer>
    );
};

export default Footer;
