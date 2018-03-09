import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './Dish.css';

class Dish extends Component {
    render() {
        return (
            <div className={classes.Dish}>
                <div className={classes.Main}>
                    <div className={classes.DishName}>{this.props.name}</div>
                    <div className={classes.Quantity}>
                        <Button disable={this.props.quantity < 1} clicked={this.props.removeDish}>-</Button>
                        <p>{this.props.quantity}</p>
                        <Button disable={this.props.quantity > 99} clicked={this.props.addDish}>+</Button>
                    </div>
                </div>
                <div className={classes.Price}>
                    ${this.props.price}
                </div>
                <div className={classes.Desc}>
                    <p>Dish description...</p>
                </div>
            </div>
        );
    }
};

export default Dish;
