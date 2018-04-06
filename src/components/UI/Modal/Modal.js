import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxilary';

const Modal = (props) => {
    let modal = null;

    if (props.show) {
        modal = (
            <Aux>
                <div className={classes.Backdrop} onClick={props.cancelPurchase}></div>
                <div className={classes.Modal}>
                    <div className={classes.Close} onClick={props.cancelPurchase}>&times;</div>
                    <div>Your Order</div>
                    <div>

                    </div>
                </div>
            </Aux>
        );
    }

    return (
        <Aux>
            {modal}
        </Aux>
    );
};

export default Modal;
